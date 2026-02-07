import { describe, it, expect } from '@jest/globals';
import { fetchAllPages } from '../../src/pagination.js';

describe('pagination', () => {
  it('fetches all pages until hasNextPage is false', async () => {
    let call = 0;
    const mockRequest = async (query, vars) => {
      call++;
      if (call === 1) {
        return {
          items: {
            nodes: [{ id: '1' }, { id: '2' }],
            pageInfo: { hasNextPage: true, endCursor: 'c1' },
          },
        };
      }
      return {
        items: {
          nodes: [{ id: '3' }],
          pageInfo: { hasNextPage: false, endCursor: null },
        },
      };
    };

    const result = await fetchAllPages(mockRequest, 'query', {}, 'items');
    expect(result).toHaveLength(3);
    expect(result.map(n => n.id)).toEqual(['1', '2', '3']);
  });

  it('passes cursor to subsequent calls', async () => {
    const cursors = [];
    const mockRequest = async (query, vars) => {
      cursors.push(vars.after);
      return {
        items: {
          nodes: [{ id: '1' }],
          pageInfo: { hasNextPage: false, endCursor: null },
        },
      };
    };

    await fetchAllPages(mockRequest, 'query', {}, 'items');
    expect(cursors[0]).toBeUndefined();
  });

  it('stops at empty connection', async () => {
    const mockRequest = async () => ({ items: null });
    const result = await fetchAllPages(mockRequest, 'query', {}, 'items');
    expect(result).toHaveLength(0);
  });
});
