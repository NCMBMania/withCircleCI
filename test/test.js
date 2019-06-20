const assert = require('assert');
const {sum} = require('../index');

describe('Index', function() {
  describe('#sum()', function () {
    it('should return 3 when variables are 1 and 2', function () {
      assert.equal(sum(1, 2), 3);
    });
  });
});