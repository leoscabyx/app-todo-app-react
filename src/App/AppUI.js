import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'

import './AppUI.css';

function AppUI({totalTodos, completedTodos, search, setSearch, searchedTodos, completeTodo, deleteTodo}) {
    return (
    <>
        <main>
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch search={search} setSearch={setSearch} />
          <TodoList todos={searchedTodos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
          <CreateTodoButton />
        </main>
    </>
    )
}

export { AppUI }