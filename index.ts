import express from 'express';
import dotenv from 'dotenv';
import { db } from './db/db'; // Import your database connection
import authRoutes from './routes/auth'; // Import your authentication routes

// Load environment variables from .env file
dotenv.config();

// Placeholder variable to indicate that db is intentionally unused
const _ = db;

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/auth', authRoutes); // Mount authentication routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
