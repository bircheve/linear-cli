export const EXIT_CODES = {
  SUCCESS: 0,
  GENERAL: 1,
  AUTH: 2,
  PERMISSION: 3,
  NOT_FOUND: 4,
  RATE_LIMITED: 5,
};

export function classifyError(err) {
  const message = err.message || '';
  const response = err.response || {};
  const status = response.status;

  if (status === 401 || message.includes('authentication') || message.includes('Invalid API key')) {
    return { code: EXIT_CODES.AUTH, label: 'Authentication error' };
  }
  if (status === 403 || message.includes('forbidden') || message.includes('permission')) {
    return { code: EXIT_CODES.PERMISSION, label: 'Permission denied' };
  }
  if (status === 404 || message.includes('not found') || message.includes('Entity not found')) {
    return { code: EXIT_CODES.NOT_FOUND, label: 'Not found' };
  }
  if (status === 429 || message.includes('rate limit') || message.includes('Too Many Requests')) {
    return { code: EXIT_CODES.RATE_LIMITED, label: 'Rate limited' };
  }
  return { code: EXIT_CODES.GENERAL, label: 'Error' };
}

export function handleError(err) {
  const { code, label } = classifyError(err);

  // Surface GraphQL error messages verbatim
  if (err.response?.errors?.length) {
    const messages = err.response.errors.map(e => e.message).join('\n');
    console.error(`${label}: ${messages}`);
  } else {
    console.error(`${label}: ${err.message}`);
  }

  process.exit(code);
}

export function failHandler(msg, err) {
  if (err) {
    handleError(err);
  } else if (msg) {
    console.error(msg);
    process.exit(EXIT_CODES.GENERAL);
  }
}
