import { describe, it, expect } from '@jest/globals';
import { classifyError, EXIT_CODES } from '../../src/error.js';

describe('error', () => {
  describe('classifyError', () => {
    it('classifies 401 as auth', () => {
      const result = classifyError({ message: '', response: { status: 401 } });
      expect(result.code).toBe(EXIT_CODES.AUTH);
    });

    it('classifies 403 as permission', () => {
      const result = classifyError({ message: '', response: { status: 403 } });
      expect(result.code).toBe(EXIT_CODES.PERMISSION);
    });

    it('classifies 404 as not_found', () => {
      const result = classifyError({ message: '', response: { status: 404 } });
      expect(result.code).toBe(EXIT_CODES.NOT_FOUND);
    });

    it('classifies 429 as rate_limited', () => {
      const result = classifyError({ message: '', response: { status: 429 } });
      expect(result.code).toBe(EXIT_CODES.RATE_LIMITED);
    });

    it('classifies unknown as general', () => {
      const result = classifyError({ message: 'something went wrong' });
      expect(result.code).toBe(EXIT_CODES.GENERAL);
    });

    it('classifies by message when no status', () => {
      const result = classifyError({ message: 'Entity not found' });
      expect(result.code).toBe(EXIT_CODES.NOT_FOUND);
    });
  });
});
