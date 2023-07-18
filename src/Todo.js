import React from "react";

const Todo = ({todoList, handleDelete, handleAddTodo})=>{
    return(
        <div className="todo-items">
            {todoList.map((todo, index)=>(
                <div className="todo-item" key={index}>
                    <div className="todo-item-1">
                        <input type="checkbox" />
                        <h4>{todo}</h4>
                    </div>
                    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/filled-trash.png" alt="filled-trash" onClick={()=>{handleDelete(index)}}/>
                </div>
            ))}
            <div className="btnDiv">
                <button onClick={handleAddTodo}>+ New Task</button>
            </div>                
        </div>
    )
}

export default Todo;