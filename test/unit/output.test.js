import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';

// Mock console.log to capture output
let logOutput;
const originalLog = console.log;

beforeEach(() => {
  logOutput = [];
  console.log = (...args) => logOutput.push(args.join(' '));
});

afterEach(() => {
  console.log = originalLog;
});

describe('output', () => {
  // Dynamically import after mocking
  let renderJson, renderTable, renderDetail, render;

  beforeAll(async () => {
    const mod = await import('../../src/output.js');
    renderJson = mod.renderJson;
    renderTable = mod.renderTable;
    renderDetail = mod.renderDetail;
    render = mod.render;
  });

  describe('renderJson', () => {
    it('outputs pretty-printed JSON', () => {
      renderJson({ id: '1', name: 'Test' });
      expect(logOutput[0]).toContain('"id": "1"');
      expect(logOutput[0]).toContain('"name": "Test"');
    });
  });

  describe('renderTable', () => {
    it('renders table for array of objects', () => {
      renderTable(
        [{ id: '1', name: 'A' }, { id: '2', name: 'B' }],
        [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]
      );
      expect(logOutput.length).toBeGreaterThan(0);
      const output = logOutput.join('\n');
      expect(output).toContain('1');
      expect(output).toContain('A');
    });

    it('handles empty results', () => {
      renderTable([], []);
      expect(logOutput[0]).toContain('No results found');
    });
  });

  describe('renderDetail', () => {
    it('renders key-value detail view', () => {
      renderDetail(
        { id: '1', name: 'Test' },
        [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]
      );
      const output = logOutput.join('\n');
      expect(output).toContain('1');
      expect(output).toContain('Test');
    });

    it('handles null input', () => {
      renderDetail(null);
      expect(logOutput[0]).toContain('No result found');
    });
  });

  describe('render', () => {
    it('uses json mode when json=true', () => {
      render({ id: '1' }, { json: true });
      expect(logOutput[0]).toContain('"id": "1"');
    });

    it('renders as list when isList=true', () => {
      render([{ id: '1' }], { isList: true });
      expect(logOutput.length).toBeGreaterThan(0);
    });
  });
});
