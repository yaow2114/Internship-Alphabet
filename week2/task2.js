'use strict';

var fs = require('fs').promises;

async function readWavFile() {
    try {
        const data = await fs.readFile('cough.wav');
        const buff = Buffer.from(data);
        console.log(buff);
    } catch (error) {
        console.error(error);
    }
}
// fs.readFile('cough.wav', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         // console.log(data.length + ' bytes');
//     }
// });

readWavFile();