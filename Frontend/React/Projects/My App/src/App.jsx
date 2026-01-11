import { useState } from "react";
import "./task.css";
function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

    const newTodo = {
      id: Date.now(),
      title,
      body,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h2>Todo App</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Body:</label>
          <br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button type="submit">Add Todo</button>
      </form>

      <hr />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.body}</p>
            <button  onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
