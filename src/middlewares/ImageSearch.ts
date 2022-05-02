import { join } from 'path';

import { Request, Response, NextFunction } from 'express';

import { search } from '../utils/FilesPath';

export const searchForImage = (
	req: Request,
	res: Response,
	next: NextFunction,
): Response | void => {
	const fullSizedImages = join(__dirname, '../../Noot_Images/Photo');
	const thumbs = join(__dirname, '../../Noot_Images/UpdatedPhoto');

	const { filename, width, height } = req.query;

	const fullSize = search(fullSizedImages, `${filename}.jpg`);
	if (!fullSize) return res.status(404).send('image not found');

	if (!width && !height) return res.sendFile(fullSize);

	const found = search(thumbs, `${filename}(${width}x${height}).jpg`);
	if (found) return res.sendFile(found);

	res.locals.fullImage = fullSize;
	next();
};