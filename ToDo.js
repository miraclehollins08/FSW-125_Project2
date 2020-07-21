const express = require('express')
const ToDo = express.Router()
const uuid = require("uuid/v4")

// middleware //
ToDo.use(express.json())

//  fake database //
const Todos = [
    { name:"Taco Tuesday", description: "Its Taco Tuesday everyone!", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk73fl2n6sC1WGIKGjC4XIZ69eERq1SyfcCw&usqp=CAU", Completed:"True", _id: uuid() },
    { name:"Chicken & Pasta Wednesday", description: "Yummy Chicken & Pasta!", imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajita-pasta-03-1572634126.jpg?crop=0.564xw:1.00xh;0.220xw,0&resize=980:*", Completed:"True", _id: uuid() },
    { name:"Baked Spaghetti Thursday", description: "Hot and Ready!", imageUrl:"https://hips.hearstapps.com/del.h-cdn.co/assets/17/37/1600x1600/square-1505340657-baked-spaghetti-delish-1.jpg?resize=980:*", Completed:"True", _id: uuid() },
    { name:"Pizza Forever Friday", description: "Pizza Friday!", imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pizza-hut-company-logo-on-building-northern-idaho-news-photo-1593615161.jpg?crop=0.668xw:1.00xh;0.136xw,0&resize=980:*", Completed:"True", _id: uuid() },

    
]


// Get All 
ToDo.get("/", (req, res) => {
    res.send(Todos)
})

// Get One
ToDo.get("/:TodosId", (req, res) => {
    const TodosId = req.params.TodosId
    const foundTodos = Todos.find(todos => todos._id === TodosId)
    res.send(foundTodos)
})

// Get by Type
ToDo.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredTodos = Todos.filter(todos => todos.name === name)
    res.send(filteredTodos)
})

// Post One 
ToDo.post("/", (req, res) => {
    const newTodos = req.body
    newTodos._id = uuid()
    Todos.push(newTodos)
    res.send("Successfully added ${newTodos.title} to the database!")
})

// Delete
ToDo.delete("/:TodosId", (req,res) => {
    const TodosId = req.params.TodosId
    const TodosIndex = Todos.findIndex(todo => todos._id === TodosId)
    Todos.splice (TodosIndex, 1)
    res.send("Successfully delete todos!")
})

// Update one
ToDo.put("/:TodosId", (req, res) => {
const TodosId = req.params.TodosId
const TodosIndex = Todos.findIndex(todos => todos._id === todosId)
const updatedtodos = Object.assign(Todos[TodosIndex], req.body)
res.send(updatedtodos)
})

module.exports = ToDo