
function CreateTodoButton() {
    const handleClickButton = () => {
        alert('Abrir Modal para agregar un TODO')
    }
    return (
        <button onClick={handleClickButton}>+</button>
    )
}

export { CreateTodoButton };