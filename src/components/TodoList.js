import React, { useState } from "react"
import _ from "lodash"
import AddTodo from "./AddTodo"
import DisplayTodo from "./DisplayTodo"

const TodoList = () => {
    const [todo, setTodo] = useState('')
    const [listTodo, setListTodo] = useState([
        { id: 'todo1', name: 'Watching youtube' },
        { id: 'todo2', name: 'Using facebook' },
        { id: 'todo3', name: 'Reading book' }
    ])

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClickBtn = () => {
        if (!todo) {
            alert("Todo's name is not empty")
            return
        }
        let todoId = randomIntFromInterval(4, 9999999999)
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }

        let currentTodoList = _.clone(listTodo)
        currentTodoList.push(todoItem)
        setListTodo(currentTodoList)
        // setListTodo([...listTodo, todoItem])
        setTodo('')
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo)
        currentTodoList = currentTodoList.filter(item => item.id != id)
        setListTodo(currentTodoList)
    }

    return (
        <div>
            <AddTodo />
            <label>Todo's Name </label>
            <input
                value={todo}
                type='text'
                onChange={(event) => setTodo(event.target.value)}
            ></input>
            <button
                type='submit'
                onClick={() => handleClickBtn()}
            >Submit</button>
            <br></br>
            <DisplayTodo
                listTodo={listTodo}
            />
        </div>
    )
}

export default TodoList