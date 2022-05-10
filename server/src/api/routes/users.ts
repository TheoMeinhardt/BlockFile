import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { verify } from '../middleware';
import { getUserData, addUser, deleteUser, updateUser, checkCredentials, getUidByEmail } from '../controllers';

const router = Router();

// get requests
router.get('/:id', asyncHandler(verify), asyncHandler(getUserData));
router.get('/id/:email', asyncHandler(verify), asyncHandler(getUidByEmail));

// post requests
router.post('/', asyncHandler(verify), asyncHandler(addUser));
router.post('/login', asyncHandler(checkCredentials));

// patch request
router.patch('/:id', asyncHandler(verify), asyncHandler(updateUser));

// delete requests
router.delete('/:id', asyncHandler(verify), asyncHandler(deleteUser));

export default router;
