import { Router } from 'express';
import { verify } from '../middleware';
import { getUserData, addUser, deleteUser, updateUser, checkCredentials } from '../controllers';

const router = Router();

// get requests
router.get('/:id', verify, getUserData);

// post requests
router.post('/', verify, addUser);
router.post('/login', checkCredentials);

// patch request
router.patch('/:id', verify, updateUser);

// delete requests
router.delete('/:id', verify, deleteUser);

export default router;
