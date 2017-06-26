var co = require('co');
var util = require('../util/util');

function getFile(file) {
    return new Promise(function(resolve) {
        util.fakeAjax(file, resolve);
    });
}

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???
co(function*() {

    })
    .then(function() {
        util.output("Complete!!");
    })