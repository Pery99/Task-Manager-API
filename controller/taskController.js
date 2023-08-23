const Tasks = require('../Models/task')
const getAllTask = (req, res) => {
    res.status(200).json({ status: true })
}

const addTask = async (req, res) => {
    const tasks = await Tasks.create(req.body)
    res.status(201).json({ status: true, tasks });
}

const getSingleTask = (req, res) => { 
    res.status(200).json({ status: true, id: req.params.id })
}

const updateTask = (req, res) => {
    res.status(200).json({ status: true, id: req.params.id })
}
const deleteTask = (req, res) => {
    res.status(200).json({ status: true, id: req.params.id })
}
module.exports = {
    getAllTask,
    getSingleTask,
    addTask,
    updateTask,
    deleteTask,
}