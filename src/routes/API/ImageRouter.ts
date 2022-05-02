import { Router, Request, Response } from 'express';

import { validateQueryParameters } from '../../middlewares/ImageValidation';
import { searchForImage } from '../../middlewares/ImageSearch';
import { resizeImage } from '../../services/NootImageProcessing';

export const router = Router();

router.get('/', validateQueryParameters, searchForImage, resizeImage);

export default Router;