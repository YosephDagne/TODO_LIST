// File: todos/todoContext.jsx
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

 const addTodo = (todo) => {
   setTodos([
     ...todos,
     { ...todo, id: uuidv4(), date: new Date().toLocaleString() },
   ]);
 };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodoItem = (id, newTodo) => { 
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...newTodo } : todo))
    );
    setEditTodo(null);
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, editTodo, setEditTodo , editTodoItem}}
    >
      {children}
    </TodoContext.Provider>
  );
};
