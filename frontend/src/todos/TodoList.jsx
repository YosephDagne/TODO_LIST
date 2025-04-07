// File: todos/TodoList.jsx
import { useTodos } from "./todoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo, setEditTodo } = useTodos();

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={setEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
