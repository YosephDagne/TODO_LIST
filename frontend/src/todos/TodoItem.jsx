// File: todos/TodoItem.jsx
const TodoItem = ({ todo, onEdit, onDelete }) => (
  <div className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
    <div className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
      <div>
        <h3 className="font-semibold">{todo.title}</h3>
        <p className="text-sm text-gray-500">Priority: {todo.priority}</p>
        <p className="text-sm text-gray-600 italic">{todo.description}</p>
        <p className="text-xs text-gray-400">Created: {todo.date}</p>
      </div>
    </div>

    <div className="space-x-2">
      <button
        onClick={() => onEdit(todo)}
        className="text-blue-500 hover:underline"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  </div>
);

export default TodoItem;
