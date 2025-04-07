// File: todos/TodoItem.jsx
const TodoItem = ({ todo, onEdit, onDelete }) => (
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4 hover:shadow-lg transition duration-200">
    <div className="flex-1">
      <h3 className="font-semibold text-xl text-gray-800">{todo.title}</h3>
      <p className="text-sm text-gray-500">Priority: {todo.priority}</p>
      <p className="text-sm text-gray-600 italic">{todo.description}</p>
      <p className="text-xs text-gray-400">Created: {todo.date}</p>
    </div>

    <div className="flex space-x-4">
      <button
        onClick={() => onEdit(todo)}
        className="text-blue-500 hover:text-blue-700 transition duration-300"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition duration-300"
      >
        Delete
      </button>
    </div>
  </div>
);

export default TodoItem;
