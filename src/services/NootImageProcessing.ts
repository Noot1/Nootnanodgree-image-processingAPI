import { join } from 'path';

import { Request, Response } from 'express';
import sharp from 'sharp';

export const resizeImage = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const { filename, width, height } = req.query;

	const thumbDir = join(__dirname, '../../Noot_Images/UpdatedPhoto');
	const resizedImage = join(thumbDir, `${filename}(${width}x${height}).jpg`);

	sharp(res.locals.fullImage)
		.resize(Number(width), Number(height))
		.toFile(resizedImage, (): void => res.sendFile(resizedImage as string));
};