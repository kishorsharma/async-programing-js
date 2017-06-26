var util = require('../util/util');

function getFile(file) {
    var fn, text;
    util.fakeAjax(file, function(data) {
        if (!fn) text = data;
        else fn(data);
    });
    return function th(cb) {
        if (text) cb(text)
        else fn = cb;
    }
}

var th1 = getFile("File1");
var th2 = getFile("File2");
var th3 = getFile("file3");

th1(function(data1) {
    util.output(data1);
    th2(function(data2) {
        util.output(data2);
        th3(function(data3) {
            util.output(data3);
            util.output("Complete");
        })
    });
})