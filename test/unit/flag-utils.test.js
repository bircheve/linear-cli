import { describe, it, expect } from '@jest/globals';
import { writeFileSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { kebabToCamel, camelToKebab, parseJsonFlag, buildInputObject } from '../../src/flag-utils.js';

describe('flag-utils', () => {
  describe('kebabToCamel', () => {
    it('converts kebab-case to camelCase', () => {
      expect(kebabToCamel('team-id')).toBe('teamId');
      expect(kebabToCamel('project-milestone-id')).toBe('projectMilestoneId');
      expect(kebabToCamel('id')).toBe('id');
    });
  });

  describe('camelToKebab', () => {
    it('converts camelCase to kebab-case', () => {
      expect(camelToKebab('teamId')).toBe('team-id');
      expect(camelToKebab('projectMilestoneId')).toBe('project-milestone-id');
      expect(camelToKebab('id')).toBe('id');
    });
  });

  describe('parseJsonFlag', () => {
    it('parses JSON strings', () => {
      expect(parseJsonFlag('{"a":1}')).toEqual({ a: 1 });
    });

    it('reads from file with @ prefix', () => {
      const filePath = join(tmpdir(), 'test-flag-utils.json');
      writeFileSync(filePath, '{"hello":"world"}');
      try {
        expect(parseJsonFlag(`@${filePath}`)).toEqual({ hello: 'world' });
      } finally {
        unlinkSync(filePath);
      }
    });

    it('returns non-string values unchanged', () => {
      expect(parseJsonFlag(42)).toBe(42);
      expect(parseJsonFlag(null)).toBe(null);
    });
  });

  describe('buildInputObject', () => {
    it('builds input from argv with kebab-to-camel conversion', () => {
      const argv = { teamId: 'T1', title: 'Hello' };
      const fieldMap = { 'team-id': 'teamId', title: 'title' };
      expect(buildInputObject(argv, fieldMap)).toEqual({ teamId: 'T1', title: 'Hello' });
    });

    it('skips undefined values', () => {
      const argv = { teamId: 'T1' };
      const fieldMap = { 'team-id': 'teamId', title: 'title' };
      expect(buildInputObject(argv, fieldMap)).toEqual({ teamId: 'T1' });
    });
  });
});
