import { GraphQLClient } from 'graphql-request';
import { getApiKey } from './auth.js';

const DEFAULT_ENDPOINT = 'https://api.linear.app/graphql';
const MAX_RETRIES = 3;
const TIMEOUT = 30000;

let _client;

export async function getClient() {
  if (_client) return _client;
  const key = await getApiKey();
  const endpoint = process.env.LINEAR_API_URL || DEFAULT_ENDPOINT;
  _client = new GraphQLClient(endpoint, {
    headers: { Authorization: key },
    timeout: TIMEOUT,
  });
  return _client;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function request(query, variables) {
  const client = await getClient();
  let lastError;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      return await client.request(query, variables);
    } catch (err) {
      lastError = err;
      const status = err.response?.status;
      if (status === 429 && attempt < MAX_RETRIES - 1) {
        const delay = Math.pow(2, attempt) * 1000;
        await sleep(delay);
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}
