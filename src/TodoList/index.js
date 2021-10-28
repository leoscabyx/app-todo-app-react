import { TodoItem } from '../TodoItem'
import './TodoList.css'

function TodoList({todos, completeTodo, deleteTodo}) {
    return (
        <section>
            <ul>
                {todos.map( item => <TodoItem key={item.text} text={item.text} completed={item.completed} onComplete={()=> completeTodo(item.text)} onDelete={() => deleteTodo(item.text)} /> )}
            </ul>
        </section>
    )
}

export { TodoList } ;