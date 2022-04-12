"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    console.log(req);
    res.send('hello word');
});
app.listen(port, function () {
    console.log('서버 오픈');
});
//# sourceMappingURL=app.js.map