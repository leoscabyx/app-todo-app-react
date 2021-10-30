import React from "react"

import { TodoContext } from '../TodoContext'

import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="newTodo">Escribe un nuevo TODO</label>
            <textarea 
                placeholder="Aprender JavaSript a Fondo"
                value={newTodoValue}
                onChange={onChange}
                id="newTodo"
            >
            </textarea>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Aceptar</button>
            </div>
        </form>
    )
}

export { TodoForm }
