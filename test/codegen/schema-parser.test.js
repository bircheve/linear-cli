import { describe, it, expect } from '@jest/globals';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSchema } from '../../codegen/schema-parser.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMA_PATH = join(__dirname, '../../schema/linear-schema.graphql');

describe('schema-parser', () => {
  let ir;

  beforeAll(() => {
    ir = parseSchema(SCHEMA_PATH);
  });

  it('parses queries', () => {
    expect(ir.queries.length).toBeGreaterThanOrEqual(100);
    const issue = ir.queries.find(q => q.name === 'issue');
    expect(issue).toBeDefined();
    expect(issue.args.some(a => a.name === 'id')).toBe(true);
  });

  it('parses mutations', () => {
    expect(ir.mutations.length).toBeGreaterThanOrEqual(200);
    const issueCreate = ir.mutations.find(m => m.name === 'issueCreate');
    expect(issueCreate).toBeDefined();
    expect(issueCreate.args.some(a => a.name === 'input')).toBe(true);
  });

  it('parses enums', () => {
    expect(Object.keys(ir.enums).length).toBeGreaterThanOrEqual(40);
    expect(ir.enums.PaginationOrderBy).toBeDefined();
    expect(ir.enums.PaginationOrderBy).toContain('createdAt');
  });

  it('parses input types', () => {
    expect(Object.keys(ir.inputTypes).length).toBeGreaterThanOrEqual(200);
    const issueCreateInput = ir.inputTypes.IssueCreateInput;
    expect(issueCreateInput).toBeDefined();
    expect(issueCreateInput.fields.title).toBeDefined();
    expect(issueCreateInput.fields.teamId).toBeDefined();
    expect(issueCreateInput.fields.teamId.required).toBe(true);
  });

  it('parses object types', () => {
    expect(Object.keys(ir.objectTypes).length).toBeGreaterThanOrEqual(100);
    const issue = ir.objectTypes.Issue;
    expect(issue).toBeDefined();
    expect(issue.fields.id).toBeDefined();
    expect(issue.fields.title).toBeDefined();
  });

  it('handles deprecation', () => {
    const deprecated = ir.queries.find(q => q.isDeprecated);
    // There should be at least one deprecated query
    expect(deprecated).toBeDefined();
    expect(deprecated.deprecationReason).toBeTruthy();
  });
});
