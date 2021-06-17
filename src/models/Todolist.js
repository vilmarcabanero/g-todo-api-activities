import mongoose from 'mongoose';

const TodolistSchema = new mongoose.Schema(
	{
		task: {
			type: String,
			required: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Todolist', TodolistSchema);
