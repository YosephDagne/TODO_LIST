import { useTodos } from "./todoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo, setEditTodo } = useTodos();

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Your Todo List
      </h1>{" "}
      {/* Title above the list */}
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
