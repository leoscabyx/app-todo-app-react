import { TodoItem } from './TodoItem'

function TodoList({todos}) {
    return (
        <section>
            <ul>
                {todos.map( item => <TodoItem key={item.text} text={item.text} completed={item.completed}/> )}
            </ul>
        </section>
    )
}

export { TodoList } ;