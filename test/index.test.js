/**
 * Library Imports
 */
const Code = require('code');
const Lab  = require('lab');
const lab  = Lab.script();

/**
 * Custom Handlers
 */
const it       = lab.it;
const describe = lab.describe;
const expect   = Code.expect;

/**
 * Tests
 */
describe('math', () => {
  it('returns true when 1 + 1 equals 2', (done) => {
    expect(1 + 1).to.equal(2);
    done();
  });
});

/**
 * Exporting
 */
exports.lab = lab;
