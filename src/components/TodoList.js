import React, { useState } from "react"

const TodoList = () => {
    const [name, setName] = useState('Quang')
    return (
        <div>
            <label>Name </label>
            <input value={name} type='text' onChange={(event) => setName(event.target.value)}></input>
            <br></br>
            Hello TodoList with name = {name}
        </div>
    )
}

export default TodoList