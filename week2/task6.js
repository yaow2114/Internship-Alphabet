'use strict';

var fs = require('fs');
var readStream = fs.createReadStream('music.mp3');
/* note:
The line var writeStream = fs.createWriteStream('New_music.mp3'); 
by itself does not create an actual file. 
It only creates a writable stream object that is associated with the file path 'New_music.mp3'.
*/
var writeStream = fs.createWriteStream('New_music.mp3');

readStream.pipe(writeStream);