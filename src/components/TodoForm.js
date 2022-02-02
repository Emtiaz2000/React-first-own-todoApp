import React, { useState } from 'react';
import '../App.css'

export default function TodoForm({showClearAllBtn,storeTodo}) {
    const [todoValue,setTodoValue] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(todoValue===''){
            alert('Please Add todo!')
        }else{
            storeTodo({
                todoContent:todoValue,
                id:Math.floor(Math.random()*10000)
            })
        }
        setTodoValue('')
    }


    return (
        <div>
            <form className='todo_form' onSubmit={handleSubmit}>
                <label className="todo_form_label">
                    <span> Add Your Lists</span>
                    <input type="text" onChange={(e)=>{setTodoValue(e.target.value);}}  value={todoValue}/>
                </label>
                <button type="submit" onClick={()=>{showClearAllBtn(true)}}>Add</button>
            </form>

        </div>
    );
}
