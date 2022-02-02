import React from 'react';

export default function ShowTodos({ allTodo, deleteTodo }) {
    return (
        <>
            {
                allTodo.map((todo, indx) => {
                    return (
                        <div key={todo.id} className='single_todo'>
                            <h4><span>{indx + 1}  </span>{todo.todoContent}</h4>
                            <span onClick={() => { 
                                deleteTodo(todo.id); 
                                 }}><i className="fas fa-trash"></i></span>
                        </div>
                    )
                })
            }

        </>
    );
}
