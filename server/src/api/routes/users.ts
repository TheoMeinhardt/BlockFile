import { Router } from 'express';
import { getUserData, addUser, deleteUser } from '../controllers';

const router = Router();

// get requests
router.get('/:id', getUserData);

// post requests
router.post('/', addUser);

// delete requests
router.delete('/:id', deleteUser);

export default router;
