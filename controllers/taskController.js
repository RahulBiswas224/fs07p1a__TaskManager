const Task = require('../models/Task');

// READ: Display tasks (with Filtering)
exports.getAllTasks = async (req, res) => {
    try {
        const filter = {};
        if (req.query.category && req.query.category !== 'All') {
            filter.category = req.query.category;
        }

        const tasks = await Task.find(filter).sort({ deadline: 1 });
        const currentCategory = req.query.category || 'All';

        res.render('index', { tasks, currentCategory });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching tasks");
    }
};

// CREATE: Add a new task
exports.createTask = async (req, res) => {
    try {
        await Task.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating task");
    }
};

// UPDATE: Toggle task status
exports.updateTaskStatus = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.status = task.status === 'Pending' ? 'Completed' : 'Pending';
        await task.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating task");
    }
};

// DELETE: Remove a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting task");
    }
};