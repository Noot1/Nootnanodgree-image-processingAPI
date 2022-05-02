import { Router, Request, Response } from 'express';

import { router as imageRouter } from './API/ImageRouter';

export const router = Router();

router.use('/Photo', imageRouter);

router.get('*', (req: Request, res: Response): Response => {
	return res.sendStatus(404);
});