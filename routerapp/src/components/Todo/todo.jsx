import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="input"
                />
                <button onClick={addTodo} className="button">Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`student-item ${todo.completed ? "completed" : ""}`}>
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)} className="button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
