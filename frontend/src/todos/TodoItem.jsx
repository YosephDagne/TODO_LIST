import { formatDistanceToNow } from "date-fns";

const TodoItem = ({ todo, onEdit, onDelete }) => {
  const timeAgo = formatDistanceToNow(new Date(todo.date), { addSuffix: true });

  // Optional: Priority color mapping
  const priorityColors = {
    Maximum: "text-red-600",
    Medium: "text-yellow-500",
    Minimum: "text-green-600",
  };

  // Status color mapping
  const statusColors = {
    Pending: "text-gray-500",
    "In Progress": "text-blue-500",
    Completed: "text-green-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {" "}
          Title:
          {todo.title}
        </h3>

        <p className={`text-sm font-medium ${priorityColors[todo.priority]}`}>
          Priority: {todo.priority}
        </p>

        {/* Display Due Date */}
        {todo.dueDate && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Due Date: {todo.dueDate}
          </p>
        )}

        {/* Display Status */}
        <p className={`text-sm ${statusColors[todo.status]} font-medium mt-1`}>
          Status: {todo.status}
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          {" "}
          Description
          {todo.description}
        </p>

        <p className="text-sm text-gray-500 mt-2">Created: {timeAgo}</p>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => onEdit(todo)}
          className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded-md cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
