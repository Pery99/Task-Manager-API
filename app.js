const express = require('express');
const app = express();
const TaskRouter = require('./Router/TaskRouter')
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./Middleware/not-found')
const errorHandlerMiddleware = require('./Middleware/errorHandler')

//Middleware
app.use(express.json());

//Routes
app.use('/api/v1/tasks', TaskRouter);

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();
