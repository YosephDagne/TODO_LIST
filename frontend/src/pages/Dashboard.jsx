import { useAuth } from "../auth/authContext";
import { useTodos } from "../todos/todoContext";
import { useNavigate } from "react-router-dom";
import TodoForm from "../todos/TodoForm";
import TodoList from "../todos/TodoList";

const Dashboard = () => {
  const { logout, user } = useAuth();
  const { editTodo, setEditTodo } = useTodos();
  const navigate = useNavigate();

  // Handle logout and redirect to home
  // const handleLogout = () => {
  //   logout();
  //   navigate("/login");
  // };

  // Set selected todo for editing
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="min-h-screen px-6 py-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-white p-0 rounded-xl mb-10 w-full">
        <div>
          <h1 className="text-3xl font-bold text-orange-600 ml-80">
            Welcome, {user?.username || "User"}
          </h1>
          <p className="text-2xl text-gray-900 mt-3 text-center ml-52 ">
            Manage your goals and stay productive.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Todo Form Section */}
        <section className="bg-white border border-orange-100 p-6 rounded-xl">
          <TodoForm editTodo={editTodo} />
        </section>

        {/* Todo List Section */}
        <section className="bg-white border border-orange-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">
            Your Tasks
          </h2>
          <TodoList onEdit={handleEdit} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
