import express from 'express';
const router = express.Router();
import * as t from '../controllers/todolist.js';
import * as mAuth from '../middlewares/auth.js';

router.get('/', mAuth.verify, t.getTodolist);
router.get('/active', mAuth.verify, t.getActiveTodolist);
router.get('/complete', mAuth.verify, t.getCompleteTodolist);
router.get('/:id', mAuth.verify, t.getTodo);
router.post('/', mAuth.verify, t.createTodo);
router.put('/makecomplete/:id', mAuth.verify, t.makeComplete);
router.put('/makeincomplete/:id', mAuth.verify, t.makeIncomplete);
router.put('/archive', mAuth.verify, t.archiveCompleteTodolist);
router.put('/:id', mAuth.verify, t.updateTodo);
router.delete('/:id', mAuth.verify, t.deleteTodo);

export default router;
