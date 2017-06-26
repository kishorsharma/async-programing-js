var util = require('../util/util');

// **************************************
// The old-n-busted callback way

function getFile(file) {
    util.fakeAjax(file, function(text) {
        respState[file] = text;
        print(file, text);
    });
}
var respState = {};

function saveState(url, resp) {
    if (url === "file3") {
        respState[url] = resp;
        if (respState["file2"]) {

        }
    }

    if (respState[url]) {
        util.output(resp);
        resp[file] = null;
    }
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");