//tests/tests.js
var assert = require('assert');

suite('Email_List', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Email_List.insert({fname: 'George'});
      var docs = Email_List.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });
});

