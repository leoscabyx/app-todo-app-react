
function TodoItem({text, onComplete, completed, onDelete}) {

    /* const handleClickCompleted = ({text}) => {
        alert('Ya completaste el todo' + text)
    } */

    /* const handleClickDelete = () => {
        alert('Borraste el todo ' + text)
    } */

    return (
        <li>
            <span onClick={onComplete}>{completed ? '✅' : '⭕'}</span>
            <span onClick={onComplete} className={completed ? 'completed' : ''}>{text}</span>
            <span onClick={onDelete}>🗑️</span>
        </li>
    )
}

export { TodoItem };