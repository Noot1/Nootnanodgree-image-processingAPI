"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var FilesPath_1 = require("../utils/FilesPath");
describe('test search function', function () {
    it('test the function using an existing file', function () {
        var filePath = (0, path_1.join)(__dirname, '../..');
        var result = (0, FilesPath_1.search)(filePath, 'package.json');
        expect(result).toBeTruthy();
    });
    it('test the function using a non-existing file', function () {
        var filePath = (0, path_1.join)(__dirname, '../..');
        var result = (0, FilesPath_1.search)(filePath, 'nonExistingFile');
        expect(result).toBeFalsy();
    });
});
