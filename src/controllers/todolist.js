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
