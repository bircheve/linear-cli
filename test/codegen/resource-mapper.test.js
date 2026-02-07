import { describe, it, expect } from '@jest/globals';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSchema } from '../../codegen/schema-parser.js';
import { mapResources } from '../../codegen/resource-mapper.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMA_PATH = join(__dirname, '../../schema/linear-schema.graphql');

describe('resource-mapper', () => {
  let groups;

  beforeAll(() => {
    const ir = parseSchema(SCHEMA_PATH);
    groups = mapResources(ir);
  });

  it('creates resource groups', () => {
    const names = Object.keys(groups);
    expect(names.length).toBeGreaterThanOrEqual(30);
  });

  it('maps issue commands correctly', () => {
    const issue = groups.issue;
    expect(issue).toBeDefined();
    const actions = issue.commands.map(c => c.action);
    expect(actions).toContain('get');
    expect(actions).toContain('list');
    expect(actions).toContain('create');
    expect(actions).toContain('update');
    expect(actions).toContain('delete');
    expect(actions).toContain('archive');
  });

  it('maps project commands correctly', () => {
    const project = groups.project;
    expect(project).toBeDefined();
    const actions = project.commands.map(c => c.action);
    expect(actions).toContain('get');
    expect(actions).toContain('list');
    expect(actions).toContain('create');
  });

  it('maps team commands', () => {
    const team = groups.team;
    expect(team).toBeDefined();
    const actions = team.commands.map(c => c.action);
    expect(actions).toContain('get');
    expect(actions).toContain('list');
  });

  it('total commands >= 445', () => {
    let total = 0;
    for (const group of Object.values(groups)) {
      total += group.commands.length;
    }
    expect(total).toBeGreaterThanOrEqual(445);
  });

  it('handles manual overrides', () => {
    const user = groups.user;
    expect(user).toBeDefined();
    const actions = user.commands.map(c => c.action);
    expect(actions).toContain('viewer');
  });
});
