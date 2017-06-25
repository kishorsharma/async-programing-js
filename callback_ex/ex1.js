var util = require('../util/util');

// **************************************
// The old-n-busted callback way

function getFile(file) {
    util.fakeAjax(file, function(text) {
        // what do we do here?
    });
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");