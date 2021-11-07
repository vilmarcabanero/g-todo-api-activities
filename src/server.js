import express from 'express';
import connectDB from './config/db.js';
import env from 'dotenv';
import cors from 'cors';

import todolistRoutes from './routes/todolist.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express();
env.config();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/todos', todolistRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
