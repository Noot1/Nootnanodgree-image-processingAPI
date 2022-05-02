"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var search = function (dir, fileName) {
    var filePath = (0, path_1.join)(dir, fileName);
    var exist = (0, fs_1.existsSync)(filePath);
    return exist ? filePath : null;
};
exports.search = search;
