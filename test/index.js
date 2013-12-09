var linkedinShare = 'undefined' == typeof window
  ? require('..')
  : require('linkedin-share'); // how to do this better?

var assert = require('assert');

describe('linkedinShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
