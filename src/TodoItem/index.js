
function TodoItem({text, onComplete, completed, onDelete}) {

    /* const handleClickCompleted = ({text}) => {
        alert('Ya completaste el todo' + text)
    } */

    /* const handleClickDelete = () => {
        alert('Borraste el todo ' + text)
    } */

    return (
        <li className={completed ? 'completed' : ''}>
            <span onClick={onComplete}>✅</span>
            {text}
            <span onClick={onDelete}>❎</span>
        </li>
    )
}

export { TodoItem };