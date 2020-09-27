import React, {useState,useEffect} from 'react';
import './App.css';
// importing

import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {

  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodo, setfilteredTodo] = useState([]);


  useEffect(() => {
    filterHandler();
  }, [todos,status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodo(todos.filter(todo => todo.completed === true));
        break;
    
      case "uncompleted":
        setfilteredTodo(todos.filter(todo => todo.completed === false));
        break;
    
      default:
        setfilteredTodo(todos);
        break;
    }
  }


  return (
    <div className="App">
    <header>
         <h2>Blaze's Todo List</h2>

    </header>
    <Form setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList filteredTodo={filteredTodo} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
