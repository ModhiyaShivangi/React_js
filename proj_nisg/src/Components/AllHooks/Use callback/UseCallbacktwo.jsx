
// w3schools example

import { useState, useCallback } from "react";

const UseCallbacktwo = () => {
  
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount(c =>  c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
    <div className="container">

    <h2>count: {count}</h2>
    <button onClick={increment}>increment</button>

    <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
      
    </>
  );
};

export default  UseCallbacktwo;
