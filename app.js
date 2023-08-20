const express = require('express');
const app = express();
const TaskRouter = require('./Router/TaskRouter')
const connectDB = require('./db/connect')
require('dotenv').config();

//Middleware
app.use(express.json());
app.use('/api/v1/tasks', TaskRouter);

app.get('*', (req, res) => {
    res.status(404).send(`Sorry the url '${req.url}' is not available`)
})
const port = 3000;
 
const start = async () =>{
    try { 
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();
