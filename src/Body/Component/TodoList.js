import { useState } from "react";



export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const addTodo = () => {
        if (todo !== "") {
          setTodos([...todos, todo]);
          setTodo("");
        }
      };
      const deleteTodo = (deleteText) => {
        const newTodos = todos.filter((todo) => {
          return todo !== deleteText;
        });
        setTodos(newTodos);
      };
    return (
        <div>
        <div className="input-wrapper container">
            <input
            className="inputTodo"
                type="text"
                name="todo"
                value={todo}
                placeholder="Create a new todo"
                onChange={(e) => {
                setTodo(e.target.value);
                }}
            />
            <button className="add-button button" onClick={addTodo}>Add</button>
        </div>
        {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, id) => (
            <div className="todo">
              <li key={id}> {todo} </li>
              <button className="delete-button button" onClick={() => {deleteTodo(todo)}}>Delete</button>
            </div>
          ))}
        </ul>
        ) : (
            <div className="empty">
                <p> Todo task Not found</p>
            </div>
        )}

        </div>
      );
  }