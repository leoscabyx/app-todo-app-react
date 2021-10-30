import React from "react"
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

import { TodoContext } from '../TodoContext'

import './AppUI.css';

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)

    return (
    <>
        <main>
          <TodoCounter />
          <TodoSearch />
          
          <TodoList>
            { error && <p>Hubo un error...</p> }
            { loading && <p>Estamos cargando...</p> }
            { (!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p> }

            { searchedTodos.map( item => 
              <TodoItem 
                key={item.text} 
                text={item.text} 
                completed={item.completed} 
                onComplete={()=> completeTodo(item.text)} 
                onDelete={() => deleteTodo(item.text)} 
              /> 
            )}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
        </main>
    </>
    )
}

export { AppUI }