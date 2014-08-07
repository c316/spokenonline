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

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Email_List.find().observe({
        added: addedNewEmail
      });

      function addedNewEmail(email_list) {
        emit('email_list', email_list);
      }
    }).once('email_list', function(email_list) {
      assert.equal(email_list.fname, 'George');
      done();
    });

    client.eval(function() {
      Email_List.insert({fname: 'George'});
    });
  });
