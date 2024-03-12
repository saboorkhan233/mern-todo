const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require('./Models/Todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://saboortahir0:saboor12345@cluster0.mqxurs4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then( result => res.json(result))
    .catch(err => res.json(err))

});

app.listen(3001, () => {
    console.log("Server is running!! 👍")
});