import express from 'express';
const router = express.Router();
import * as t from '../controllers/todolist.js';

router.get('/all', t.getTodolist);

export default router;
