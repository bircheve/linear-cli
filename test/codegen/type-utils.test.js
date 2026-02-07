import { describe, it, expect } from '@jest/globals';
import { gqlTypeToYargsType, isScalarTypeName, isConnectionType, camelToKebab, kebabToCamel } from '../../codegen/type-utils.js';

describe('type-utils', () => {
  describe('gqlTypeToYargsType', () => {
    it('maps String to string', () => {
      expect(gqlTypeToYargsType('String', false, {})).toEqual({ type: 'string' });
    });

    it('maps Int to number', () => {
      expect(gqlTypeToYargsType('Int', false, {})).toEqual({ type: 'number' });
    });

    it('maps Float to number', () => {
      expect(gqlTypeToYargsType('Float', false, {})).toEqual({ type: 'number' });
    });

    it('maps Boolean to boolean', () => {
      expect(gqlTypeToYargsType('Boolean', false, {})).toEqual({ type: 'boolean' });
    });

    it('maps DateTime to string', () => {
      expect(gqlTypeToYargsType('DateTime', false, {})).toEqual({ type: 'string' });
    });

    it('maps list types to array', () => {
      expect(gqlTypeToYargsType('String', true, {})).toEqual({ type: 'array' });
    });

    it('maps enum types with choices', () => {
      const enums = { Status: ['open', 'closed'] };
      expect(gqlTypeToYargsType('Status', false, enums)).toEqual({ type: 'string', choices: ['open', 'closed'] });
    });

    it('maps unknown types to string (JSON)', () => {
      expect(gqlTypeToYargsType('CustomInputType', false, {})).toEqual({ type: 'string' });
    });
  });

  describe('isConnectionType', () => {
    it('returns true for connection types', () => {
      expect(isConnectionType('IssueConnection')).toBe(true);
    });

    it('returns false for non-connection types', () => {
      expect(isConnectionType('Issue')).toBe(false);
    });
  });

  describe('camelToKebab', () => {
    it('converts camelCase', () => {
      expect(camelToKebab('teamId')).toBe('team-id');
      expect(camelToKebab('issueLabel')).toBe('issue-label');
    });
  });

  describe('kebabToCamel', () => {
    it('converts kebab-case', () => {
      expect(kebabToCamel('team-id')).toBe('teamId');
    });
  });
});
