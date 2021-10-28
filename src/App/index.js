import { useState } from "react";

import { AppUI } from "./AppUI";

const defaultTodos = [
  {text: "Cortar Cebolla", completed: false},
  {text: "Cortar Cebolla 2", completed: false},
  {text: "Cortar Cebolla 3", completed: true}
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [search, setSearch] = useState('')

  const completedTodos = todos.filter( todo => todo.completed === true).length
  const totalTodos = todos.length
  
  let searchedTodos = []
  // const searchedTodos = todos.map( todo => todo.text.includes(search) )

  if (!search.length >= 1) {
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos) 
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos) 
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search} 
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
