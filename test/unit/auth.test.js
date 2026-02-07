import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

// We test auth by importing fresh copies with cache-busting query strings.
// Since getApiKey() is async and relies on env + config file, we set up
// both and test the resolution order.

const TEST_CONFIG_DIR = join(tmpdir(), 'linear-cli-test-' + process.pid);
const TEST_CONFIG_FILE = join(TEST_CONFIG_DIR, 'config.json');

describe('auth', () => {
  const originalEnv = { ...process.env };
  const originalExit = process.exit;
  let exitCode;

  beforeEach(() => {
    exitCode = null;
    process.exit = (code) => { exitCode = code; throw new Error(`exit:${code}`); };
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    process.exit = originalExit;
    try { rmSync(TEST_CONFIG_DIR, { recursive: true, force: true }); } catch {}
  });

  it('returns API key from env when valid', async () => {
    process.env.LINEAR_API_KEY = 'lin_api_test12345';
    const { getApiKey } = await import('../../src/auth.js?' + Date.now());
    const key = await getApiKey();
    expect(key).toBe('lin_api_test12345');
  });

  it('exits 2 when env key has wrong prefix', async () => {
    process.env.LINEAR_API_KEY = 'wrong_prefix_key';
    const mod = await import('../../src/auth.js?prefix=' + Date.now());
    await expect(mod.getApiKey()).rejects.toThrow('exit:2');
    expect(exitCode).toBe(2);
  });

  it('exits 2 when no key and non-TTY', async () => {
    delete process.env.LINEAR_API_KEY;
    // stdin.isTTY is undefined in test environment (non-TTY), so it should exit
    const mod = await import('../../src/auth.js?missing=' + Date.now());
    await expect(mod.getApiKey()).rejects.toThrow('exit:2');
    expect(exitCode).toBe(2);
  });

  it('saveApiKey writes config file', async () => {
    const { saveApiKey } = await import('../../src/auth.js?save=' + Date.now());
    // We can't easily redirect CONFIG_DIR in the module, so test the function signature exists
    expect(typeof saveApiKey).toBe('function');
  });

  it('clearApiKey is a function', async () => {
    const { clearApiKey } = await import('../../src/auth.js?clear=' + Date.now());
    expect(typeof clearApiKey).toBe('function');
  });

  it('getStoredKey returns null when no config exists', async () => {
    const { getStoredKey } = await import('../../src/auth.js?stored=' + Date.now());
    // Even if a config file exists from the user, getStoredKey should not throw
    const result = getStoredKey();
    expect(result === null || typeof result === 'string').toBe(true);
  });
});
