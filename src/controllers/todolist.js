import Todolist from '../models/Todolist.js';

export const getTodolist = (req, res) => {
	try {
		Todolist.find()
			.then(todolists => {
				res.send(todolists);
			})
			.catch(err => res.status(404).send(err.message));
	} catch (err) {
		console.log(err);
	}
};

export const getActiveTodolist = (req, res) => {
	try {
		Todolist.find({ isActive: true })
			.then(todolists => {
				res.send(todolists);
			})
			.catch(err => res.status(404).send(err.message));
	} catch (err) {
		console.log(err);
	}
};

export const createTodo = (req, res) => {
	try {
		const newTodo = new Todolist({
			task: req.body.task,
		});

		newTodo
			.save()
			.then(todo => res.status(201).send(todo))
			.catch(err => res.send(err.message));
	} catch (err) {
		console.log(err);
	}
};

export const makeComplete = (req, res) => {
	try {
		Todolist.findByIdAndUpdate(req.params.id, { complete: true }, { new: true })
			.then(todo => res.send(todo))
			.catch(err => res.send(err.message));
	} catch (err) {
		console.log(err);
	}
};

export const makeIncomplete = (req, res) => {
	try {
		Todolist.findByIdAndUpdate(
			req.params.id,
			{ complete: false },
			{ new: true }
		)
			.then(todo => res.send(todo))
			.catch(err => res.send(err.message));
	} catch (err) {
		console.log(err);
	}
};

export const archiveCompleteTodolist = (req, res) => {
	try {
		Todolist.updateMany({ complete: true }, { $set: { isActive: false } })
			.then(response => {
				res.send({
					message: 'Successfully archived complete todolist.',
					archivedCount: response.nModified,
				});
			})
			.catch(err => res.send(err.message));
	} catch (err) {
		console.log(err);
	}
};
