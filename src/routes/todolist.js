import express from 'express';
const router = express.Router();
import * as t from '../controllers/todolist.js';

router.get('/', t.getTodolist);
router.get('/active', t.getActiveTodolist);
router.get('/:id', t.getTodo)
router.post('/', t.createTodo);
router.put('/makecomplete/:id', t.makeComplete);
router.put('/makeincomplete/:id', t.makeIncomplete);
router.put('/archive', t.archiveCompleteTodolist)
router.put('/:id', t.updateTodo)
router.delete('/:id', t.deleteTodo)

export default router;
