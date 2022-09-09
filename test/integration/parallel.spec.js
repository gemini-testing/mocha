'use strict';

const assert = require('assert');
const {runMochaJSONAsync} = require('./helpers');

describe('parallel run', () => {
  it('should correctly set worker ids for each process', async () => {
    const result = await runMochaJSONAsync('parallel/testworkerid3.mjs', [
      '--parallel',
      '--jobs',
      '2',
      require.resolve('./fixtures/parallel/testworkerid1.mjs'),
      require.resolve('./fixtures/parallel/testworkerid2.mjs')
    ]);
    assert.strictEqual(result.stats.failures, 0);
    assert.strictEqual(result.stats.passes, 3);
  });
});
