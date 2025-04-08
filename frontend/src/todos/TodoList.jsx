import { useTodos } from "./todoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo, setEditTodo } = useTodos();

  return (
    <div className="w-full">
      {todos.length === 0 ? (
        <p className="text-gray-500 italic">You have no tasks yet.</p>
      ) : (
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
      )}
    </div>
  );
};

export default TodoList;
