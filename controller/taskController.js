const Tasks = require('../Models/task')
const getAllTask = async (req, res) => {
    try {
        const tasks = await Tasks.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const addTask = async (req, res) => {
    try {
        const tasks = await Tasks.create(req.body)
        res.status(201).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleTask = async (req, res) => {
    try {
        const tasks = await Tasks.find({ _id: req.params.id })
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
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