import React from "react"
import { TodoContext } from '../TodoContext'

function CreateTodoButton({ setOpenModal }) {

    const { openModal } = React.useContext(TodoContext)

    const handleClickButton = () => {
        setOpenModal(!openModal)
    }
    return (
        <button onClick={handleClickButton}>+</button>
    )
}

export { CreateTodoButton };