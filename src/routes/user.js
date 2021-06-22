import express from 'express';
const router = express.Router();
import * as user from '../controllers/user.js';
import * as mAuth from '../middlewares/auth.js';

router.get('/', mAuth.verify, user.getUserDetails);

export default router;
