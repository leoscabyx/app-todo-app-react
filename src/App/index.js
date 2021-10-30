import { useState, useEffect } from "react";

import { AppUI } from "./AppUI";

// const defaultTodos = [
  // {text: "Cortar Cebolla", completed: false},
  // {text: "Cortar Cebolla 2", completed: false},
  // {text: "Cortar Cebolla 3", completed: true}
// ]

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect( () => {
    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItems
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = []
        }else{
          parsedItems = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItems)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, [])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  
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
    saveTodos(newTodos) 
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos) 
  }

  // console.log('Render (antes del use effect)')
  
  // useEffect( () => {
  //   console.log('use effect')
  // }, [totalTodos])
  
  // console.log('Render (despues del use effect)')


  return (
    <AppUI
      error={error}
      loading={loading}
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
