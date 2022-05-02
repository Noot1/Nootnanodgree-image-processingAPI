"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var ImageRouter_1 = require("./API/ImageRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/Photo', ImageRouter_1.router);
exports.router.get('*', function (req, res) {
    return res.sendStatus(404);
});
