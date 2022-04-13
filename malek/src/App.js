import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './composants/TodoList';
import AddTodo from './composants/AddTodo';
import Header from './composants/Header';
import Forms from './composants/Forms'
import { useState } from 'react';

function App() {
  const [inputText,setInputText]= useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
      <Header/>
      <Forms  todos={todos} setTodos={setTodos} 
       inputText={inputText}  setInputText={setInputText} />
      <TodoList AddTodo={AddTodo}/>
      
     
    </div>
  );
}

export default App;
