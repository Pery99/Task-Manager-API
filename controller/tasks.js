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
        const task = await Tasks.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleTask = async (req, res) => {
    const { id: taskID } = req.params
    try {
        const task = await Tasks.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with the id ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const updateTask = async (req, res) => {
    const { id: taskID } = req.params;
    try {
        const task = await Tasks.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true, 
        })

        if (!task) {
            return res.status(404).json({ msg: `No task with the id ${taskID}` })

        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTask = async (req, res) => {
    const { id: taskID } = req.params
    try {
        const tasks = await Tasks.findOneAndDelete({ _id: taskID })
        if (!tasks) {
            return res.status(404).json({ msg: `No task with the id ${taskID}` })
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
module.exports = {
    getAllTask,
    getSingleTask,
    addTask,
    updateTask,
    deleteTask,
}