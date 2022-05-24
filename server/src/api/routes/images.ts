import asyncHandler from 'express-async-handler';
import { Router } from 'express';

import { verify } from '../middleware';
import { saveImage, getImages } from '../controllers';

const router = Router();

// GETs
router.get('/:id', asyncHandler(verify), asyncHandler(getImages));

// Posts
router.post('/:id', asyncHandler(verify), asyncHandler(saveImage));

export default router;
