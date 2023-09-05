const express = require('express');
const router = express.Router();
const {
    getAllTask,
    getSingleTask,
    addTask,
    updateTask,
    deleteTask,
} = require('../controller/tasks')




router.route('/').get(getAllTask).post(addTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router;