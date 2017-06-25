var co = require('co');

function getData(d) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(d);
        }, 1000);
    });
}

co(function*() {
    var x = yield getData(10);
    var y = yield getData(30);
    var answer = yield(getData(
        "Meaning of Life: " + (x + y)
    ));
    return answer;
}).then(function(value) {
    console.log(value);
}, function(err) {
    console.error(err.stack);
});