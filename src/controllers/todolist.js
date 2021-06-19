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

export const getTodo = async (req, res) => {
	try {
		const todo = await Todolist.findById(req.params.id);

		// console.log(todo._id)
		res.send(todo);
	} catch (err) {
		console.log(err);
		res.status(404).send('Todo not found.');
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

export const updateTodo = async (req, res) => {
	try {
		const todo = await Todolist.findByIdAndUpdate(
			req.params.id,
			{
				task: req.body.task,
			},
			{ new: true }
		);
		// console.log(todo);
		res.send(todo);
	} catch (err) {
		console.log(err);
		res.status(400).send(err.message);
	}
};

export const deleteTodo = async (req, res) => {
	try {
		await Todolist.findByIdAndDelete(req.params.id);
	} catch (err) {
		console.log(err);
		res.send(err.message);
	}
};
