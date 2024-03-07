const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://workinguse5:Biresh%402005@cluster0.hlgzx3g.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo = mongoose.model("todos",todoSchema);

module.exports={
    todo
}