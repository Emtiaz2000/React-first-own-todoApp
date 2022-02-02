
import { useState } from 'react';
import './App.css';
import ShowTodos from './components/ShowTodos';
import TodoForm from './components/TodoForm';

function App() {
const [clearBtn,setClearBtn] = useState(false)
const [Todo,setTodo] = useState([])

//adding todo function
const handleAddTodo = (todo)=>{
  setTodo((preTodo)=>{
    return [...preTodo,todo]
  })
}

//delete todo based on id
const handleDeleteTodo = (id)=>{
  setTodo((preTodo)=>{
   return preTodo.filter(todo=>{
      return todo.id !== id
    })
  })
  if(Todo.length<2){
    setClearBtn(false)
  }
}




//clear all at a time
const handleClearAll = ()=>{
  setTodo([])
  setClearBtn(false)
}




  return (
    <div className="App">
      <div className="todo_header">
        <h1>TODO APP</h1>
      </div>
      <div className='todo_form-container'>
        <TodoForm showClearAllBtn={setClearBtn} storeTodo={handleAddTodo} />
      </div>
      <div className='show_todos'>
        <ShowTodos allTodo={Todo} deleteTodo={handleDeleteTodo}  />

      </div>
      {clearBtn &&
       <div className="todo_footer_btn">
       <button onClick={handleClearAll} className="clear_all">Clear All</button>
     </div>
      }
     
    </div>
  );
}

export default App;
