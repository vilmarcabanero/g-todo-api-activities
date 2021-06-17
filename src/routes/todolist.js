import express from 'express';
const router = express.Router();
import * as t from '../controllers/todolist.js';

router.get('/', t.getTodolist);
router.get('/active', t.getActiveTodolist);
router.post('/', t.createTodo);
router.put('/makecomplete/:id', t.makeComplete);
router.put('/makeincomplete/:id', t.makeIncomplete);
router.put('/archive', t.archiveCompleteTodolist)

export default router;
