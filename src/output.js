import Table from 'cli-table3';
import chalk from 'chalk';

export function renderJson(data) {
  console.log(JSON.stringify(data, null, 2));
}

export function renderTable(rows, columnConfig) {
  if (!rows || rows.length === 0) {
    console.log('No results found.');
    return;
  }

  const cols = columnConfig || guessColumns(rows[0]);
  const table = new Table({
    head: cols.map(c => chalk.bold(c.header || c.key)),
    style: { head: [], border: [] },
    wordWrap: true,
  });

  for (const row of rows) {
    table.push(cols.map(c => formatCell(resolveValue(row, c.key), c)));
  }

  console.log(table.toString());
}

export function renderDetail(obj, columnConfig) {
  if (!obj) {
    console.log('No result found.');
    return;
  }

  const cols = columnConfig || guessColumns(obj);
  const table = new Table({
    style: { head: [], border: [] },
  });

  for (const c of cols) {
    const val = resolveValue(obj, c.key);
    table.push({ [chalk.bold(c.header || c.key)]: formatCell(val, c) });
  }

  console.log(table.toString());
}

function resolveValue(obj, key) {
  const parts = key.split('.');
  let val = obj;
  for (const p of parts) {
    if (val == null) return '';
    val = val[p];
  }
  return val;
}

function formatCell(val, col) {
  if (val == null) return '';
  if (col && col.type === 'date' && val) {
    return typeof val === 'string' ? val : new Date(val).toISOString();
  }
  if (typeof val === 'object') {
    return JSON.stringify(val);
  }
  return String(val);
}

function guessColumns(obj) {
  if (!obj || typeof obj !== 'object') return [];
  return Object.keys(obj)
    .filter(k => typeof obj[k] !== 'object' || obj[k] === null)
    .slice(0, 8)
    .map(k => ({ key: k, header: k }));
}

export function render(data, opts = {}) {
  const { json, columnConfig, isList } = opts;
  if (json) {
    renderJson(data);
    return;
  }
  if (isList && Array.isArray(data)) {
    renderTable(data, columnConfig);
  } else {
    renderDetail(data, columnConfig);
  }
}
