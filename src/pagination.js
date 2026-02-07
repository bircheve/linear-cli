const MAX_ITEMS = 10000;
const PAGE_DELAY = 100;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getNestedValue(obj, path) {
  const parts = path.split('.');
  let val = obj;
  for (const p of parts) {
    if (val == null) return undefined;
    val = val[p];
  }
  return val;
}

export async function fetchAllPages(requestFn, query, variables, nodePath) {
  const allNodes = [];
  let cursor = undefined;
  let hasNextPage = true;

  while (hasNextPage && allNodes.length < MAX_ITEMS) {
    const vars = { ...variables, after: cursor };
    const data = await requestFn(query, vars);
    const connection = getNestedValue(data, nodePath);

    if (!connection) break;

    const nodes = connection.nodes || [];
    allNodes.push(...nodes);

    const pageInfo = connection.pageInfo;
    if (!pageInfo) break;

    hasNextPage = pageInfo.hasNextPage;
    cursor = pageInfo.endCursor;

    if (hasNextPage && allNodes.length < MAX_ITEMS) {
      await sleep(PAGE_DELAY);
    }
  }

  return allNodes;
}
