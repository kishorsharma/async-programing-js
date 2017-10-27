const https = require('https');
const Cpromise = function (cb) {
    
    const promiseObj = {};
    let data, fn;

    cb(function resolve(_data){
        if (fn) {
            fn(_data);
        } else {
            data = _data;
        }
    },
    function reject () {
    console.log("rejection");
    })

    promiseObj.then = function (cb) {
    if(data) {
        cb(data)
    } else {
        fn = cb;
    }
    }
    return promiseObj;
};

/*const p = Cpromise(function (resolve, reject) {
    setTimeout(function () {
        resolve("ABC");
    }, 2000);
});*/

const p = Cpromise(function (resolve, reject) {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
       
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
       
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(JSON.parse(data).explanation);
        });
       
      }).on("error", reject);
});

p.then(function (data) {
    console.log("Data: ", data);
})