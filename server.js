/**
 * Project Title: Basic To-Do List Application with Categories and Deadlines
 * Project Code: FS07P1A
 * Organization: Rixi Lab Technologies
 * Developer ID: BWU/BCA/23/224
 */

const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
  .then(() => console.log('MongoDB Connected successfully!'))
  .catch(err => console.log('DB Connection Error:', err));

// Mount the Routes
app.use('/', taskRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));