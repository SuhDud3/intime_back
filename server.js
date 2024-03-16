import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth-routes.js';
import userRoutes from './routes/user-routes.js';
import expenseRoutes from './routes/expense-routes.js';
import categoryRoutes from './routes/category-routes.js';
import 'dotenv/config.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT_APP || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);
app.use('/category', categoryRoutes);

app.get('/api', (req, res) => {
    res.json({
        message : "Bienvenue sur l'API InTime"
    })
});

app.get('/', (req, res) => {
    res.json({
        message : "Bienvenue sur l'API InTime"
    })
});

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "InTime API",
            version: "1.0.0",
            description: "InTime API Documentation",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html"
            },
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
