import { Router } from 'express';
import { getUserData, addUser, deleteUser, updateUser } from '../controllers';

const router = Router();

// get requests
router.get('/:id', getUserData);

// post requests
router.post('/', addUser);

// patch request
router.patch('/:id', updateUser);

// delete requests
router.delete('/:id', deleteUser);

export default router;
