import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth-routes.js';
import userRoutes from './routes/user-routes.js';
import expenseRoutes from './routes/expense-routes.js';
import 'dotenv/config.js';

const PORT = process.env.PORT_APP || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});

export default app;
