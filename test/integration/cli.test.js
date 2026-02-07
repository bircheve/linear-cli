import { describe, it, expect } from '@jest/globals';
import { execFile } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI = join(__dirname, '../../bin/linear.js');

function run(args, opts = {}) {
  return new Promise((resolve) => {
    execFile('node', [CLI, ...args], { timeout: 10000, ...opts }, (err, stdout, stderr) => {
      resolve({ code: err?.code ?? 0, stdout, stderr });
    });
  });
}

describe('CLI integration', () => {
  it('--help exits 0 and lists commands', async () => {
    const { code, stdout } = await run(['--help']);
    expect(code).toBe(0);
    expect(stdout).toContain('linear <command>');
    expect(stdout).toContain('issue');
    expect(stdout).toContain('project');
    expect(stdout).toContain('team');
  });

  it('--version prints version', async () => {
    const { code, stdout } = await run(['--version']);
    expect(code).toBe(0);
    expect(stdout.trim()).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it('issue --help lists subcommands', async () => {
    const { code, stdout } = await run(['issue', '--help']);
    expect(code).toBe(0);
    expect(stdout).toContain('list');
    expect(stdout).toContain('get');
    expect(stdout).toContain('create');
    expect(stdout).toContain('update');
  });

  it('issue create --help shows flags', async () => {
    const { code, stdout } = await run(['issue', 'create', '--help']);
    expect(code).toBe(0);
    expect(stdout).toContain('--team-id');
    expect(stdout).toContain('--title');
    expect(stdout).toContain('--input-json');
  });

  it('issue list --help shows pagination flags', async () => {
    const { code, stdout } = await run(['issue', 'list', '--help']);
    expect(code).toBe(0);
    expect(stdout).toContain('--first');
    expect(stdout).toContain('--after');
    expect(stdout).toContain('--all');
  });

  it('no API key exits with code 2 in non-TTY', async () => {
    // Use a temp HOME so no stored config is found
    const fakeHome = mkdtempSync(join(tmpdir(), 'linear-cli-test-'));
    const env = { ...process.env, HOME: fakeHome };
    delete env.LINEAR_API_KEY;
    const { code, stderr } = await run(['issue', 'list'], { env });
    expect(code).toBe(2);
    expect(stderr).toContain('No API key found');
  });

  it('auth --help lists subcommands', async () => {
    const { code, stdout } = await run(['auth', '--help']);
    expect(code).toBe(0);
    expect(stdout).toContain('login');
    expect(stdout).toContain('logout');
    expect(stdout).toContain('whoami');
  });

  it('unknown command fails', async () => {
    const { code, stderr } = await run(['nonexistent']);
    expect(code).not.toBe(0);
  });
});
