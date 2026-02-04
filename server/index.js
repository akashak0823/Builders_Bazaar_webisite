import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars from the root directory (one level up from server/)
dotenv.config({ path: path.join(__dirname, '../.env') });

import Product from './models/Product.js';
import Inquiry from './models/Inquiry.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('FATAL ERROR: MONGO_URI is not defined in environment variables.');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Builders Bazaar API is running');
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Submit inquiry
app.post('/api/inquire', async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.status(201).json(inquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
