import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'

import './App.css';

const todos = [
  {text: "Cortar Cebolla", completed: false},
  {text: "Cortar Cebolla 2", completed: false},
  {text: "Cortar Cebolla 3", completed: false}
]

function App() {
  return (
    <>
      <main>
        <TodoCounter />
        <TodoSearch />
        <TodoList todos={todos} />
        <CreateTodoButton />
      </main>
    </>
  );
}

export default App;
