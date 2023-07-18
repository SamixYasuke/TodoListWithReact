import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

const App = ()=>{
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState("");
    const [input, setInput] = useState("");

    const handleInput = (e)=>{
        setInput(e.target.value);
    }

    const handleAddTodo = ()=>{
        if(input.length !== 0){
            setTodoList([...todoList, input]);
            setValue("");
        }else{
            alert("You can't add empty items to the list")
        }
    }

    const handleDelete = (todo)=>{
        setTodoList(todoList => todoList.filter((_, index)=> index !==todo))
    }

    return(
        <div className="todo-container">
            <div className="todo-header">
                <h2>TO-DO LIST</h2>
            </div>
            <div className="inputDiv">
                <input type="text" onChange={handleInput} value={todoList}/>
            </div>
            <Todo todoList={todoList} handleDelete={handleDelete} handleAddTodo={handleAddTodo} />
        </div>
    )
}

export default App;
