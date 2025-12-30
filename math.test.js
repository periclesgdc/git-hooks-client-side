const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./math.js');

test('add should return the correct sum', () => {
    const result = add(1, 2);
    assert.strictEqual(result, 3, 'Addition failed: expected 3');
});

test('add should return correct sum with negative numbers', () => {
    const result = add(-1, -1);
    assert.strictEqual(result, -2, 'Addition failed: expected -2');
});

