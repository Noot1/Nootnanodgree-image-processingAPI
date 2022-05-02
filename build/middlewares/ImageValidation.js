"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParameters = void 0;
var validateQueryParameters = function (req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (!filename)
        return res.status(404).send('filename parameter is essential');
    if (!width && !height)
        return next();
    if (!width || !height)
        return res.status(404).send('parameters width and height should be used together');
    if (isNaN(+width))
        return res.status(404).send('width value must be a number');
    if (isNaN(+height))
        return res.status(404).send("height value must be a number");
    if (+width <= 0)
        return res.status(404).send("width value must be a positive number");
    if (+height <= 0)
        return res.status(404).send("height value must be a positive number");
    next();
};
exports.validateQueryParameters = validateQueryParameters;
