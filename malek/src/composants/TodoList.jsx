import React, {useState} from 'react'

import AddTodo from './AddTodo'
function TodoList(AddTod ) {
  return (
    <div className="todo-container">
    <ul className="todo-list">
   {AddTodo.map((AddTodo)=>(
      <AddTodo/>
   )
   )}
      
    
    </ul>
  </div>
  )
}

export default TodoList