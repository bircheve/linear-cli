import { readFileSync, writeFileSync, mkdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const API_KEY_PREFIX = 'lin_api_';
const CONFIG_DIR = join(homedir(), '.config', 'linear-cli');
const CONFIG_FILE = join(CONFIG_DIR, 'config.json');

export { CONFIG_DIR, CONFIG_FILE };

export function validateKey(key) {
  return !!key && key.startsWith(API_KEY_PREFIX);
}

export function getStoredKey() {
  try {
    const data = JSON.parse(readFileSync(CONFIG_FILE, 'utf-8'));
    return data.apiKey || null;
  } catch {
    return null;
  }
}

export function saveApiKey(key) {
  mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify({ apiKey: key }, null, 2) + '\n', { mode: 0o600 });
}

export function clearApiKey() {
  try {
    unlinkSync(CONFIG_FILE);
  } catch {
    // Ignore if file doesn't exist
  }
}

export async function getApiKey() {
  // 1. Environment variable takes precedence
  const envKey = process.env.LINEAR_API_KEY;
  if (envKey) {
    if (!validateKey(envKey)) {
      console.error(
        `Error: LINEAR_API_KEY must start with "${API_KEY_PREFIX}".\n` +
        'Get a valid key from https://linear.app/settings/api'
      );
      process.exit(2);
    }
    return envKey;
  }

  // 2. Config file
  const storedKey = getStoredKey();
  if (storedKey) {
    if (!validateKey(storedKey)) {
      console.error(
        `Error: Stored API key is invalid (must start with "${API_KEY_PREFIX}").\n` +
        'Run `linear setup` to set a new key.'
      );
      process.exit(2);
    }
    return storedKey;
  }

  // 3. No key found
  console.error(
    'Error: No API key found.\n' +
    'Run `linear setup` to configure your API key.\n' +
    'Get your API key from https://linear.app/settings/api'
  );
  process.exit(2);
}
