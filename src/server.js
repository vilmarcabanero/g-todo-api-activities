import express from 'express';
import connectDB from './config/db.js';
import env from 'dotenv';
import cors from 'cors';

import todolistRoutes from './routes/todolist.js';

const app = express();
env.config();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/todolist', todolistRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
