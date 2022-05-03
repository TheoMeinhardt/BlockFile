import asyncHandler from 'express-async-handler';
import { Router } from 'express';

import { verify } from '../middleware';
import { saveImage } from '../controllers';

const router = Router();

// Posts
router.post('/:id', asyncHandler(verify), asyncHandler(saveImage));

export default router;
