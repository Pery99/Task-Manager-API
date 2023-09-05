const Tasks = require('../Models/task')
const asyncWrapper = require('../Middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.find({});
    res.status(200).json({ value: task.length, task })
})

const addTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(201).json({ task });
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Tasks.findOne({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with the id ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Tasks.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return next(createCustomError(`No task with the id ${taskID}`, 404))
    }
    res.status(200).json({ task })
})
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const tasks = await Tasks.findOneAndDelete({ _id: taskID })
    if (!tasks) {
        return next(createCustomError(`No task with the id ${taskID}`, 404))
    }
    res.status(200).json({ tasks })
})
module.exports = {
    getAllTask,
    getSingleTask,
    addTask,
    updateTask,
    deleteTask,
}