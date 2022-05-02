"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForImage = void 0;
var path_1 = require("path");
var FilesPath_1 = require("../utils/FilesPath");
var searchForImage = function (req, res, next) {
    var fullSizedImages = (0, path_1.join)(__dirname, '../../Noot_Images/Photo');
    var thumbs = (0, path_1.join)(__dirname, '../../Noot_Images/UpdatedPhoto');
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    var fullSize = (0, FilesPath_1.search)(fullSizedImages, "".concat(filename, ".jpg"));
    if (!fullSize)
        return res.status(404).send('image not found');
    if (!width && !height)
        return res.sendFile(fullSize);
    var found = (0, FilesPath_1.search)(thumbs, "".concat(filename, "(").concat(width, "x").concat(height, ").jpg"));
    if (found)
        return res.sendFile(found);
    res.locals.fullImage = fullSize;
    next();
};
exports.searchForImage = searchForImage;
