import { useAuth } from "../auth/authContext";
import { useTodos } from "../todos/todoContext";
import TodoForm from "../todos/TodoForm";
import TodoList from "../todos/TodoList";

const Dashboard = () => {
  const { logout, user } = useAuth();
  const { editTodo, setEditTodo } = useTodos();

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-orange-600">
            Welcome, {user?.username || "User"}
          </h1>
          <p className="text-sm text-gray-500">Your personal task manager</p>
        </div>
        <button
          onClick={logout}
          className="bg-orange-500 text-white px-5 py-2 mt-4 md:mt-0 rounded-lg hover:bg-orange-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Todo Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            {editTodo ? "Edit Your Task" : "Create a New Task"}
          </h2>
          <TodoForm editTodo={editTodo} />
        </div>

        {/* Todo List */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Your Tasks
          </h2>
          <TodoList onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
