import React from 'react'

function Forms({setInputText,todos,setTodos,inputText}) {
    const InputTextHandler=(e)=>
     {
        console.log(e.target.value);
        setInputText(e.target.value)
    };
    const submitTodoHandler=(e)=>{
     e.preventDefault();
     setTodos=([
         ...todos,{text:inputText,completed:false, id:Math.random()*1000}
     ])
     setInputText("");
    };
  return (
    <div>
      <form >
      <input value={inputText} onChange={InputTextHandler} type="text" class="todo-input" />
      <button onClick={submitTodoHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>  
    </div>
  )
}

export default Forms