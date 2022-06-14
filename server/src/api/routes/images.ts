import asyncHandler from 'express-async-handler';
import { Router } from 'express';

// import { verify } from '../middleware';
import { saveImage, getImages } from '../controllers';

const router = Router();

// GETs
router.get('/:id', asyncHandler(getImages));

// Posts
router.post('/:id', asyncHandler(saveImage));

export default router;
