
const getAllTask = (req, res) => {
    res.status(200).json({ status: true })
}

const addTask = (req, res) => {
    res.status(200).json({ status: true, data: req.body });
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