const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Map URLs to Controller functions
router.get('/', taskController.getAllTasks);
router.post('/add', taskController.createTask);
router.post('/update/:id', taskController.updateTaskStatus);
router.post('/delete/:id', taskController.deleteTask);

module.exports = router;