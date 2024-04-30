'use strict';

const util = require('node:util');
var fs = require('fs')

const decoder = new TextDecoder("gbk");
const buff = Buffer.from(JSON.stringify({"hello":"�������","count":16,"this":"that","price":106.959,"groups":[{"name":"Bob","age":"16"},{"name":"Alice","age":24}]}));
console.log(decoder.decode(buff));
