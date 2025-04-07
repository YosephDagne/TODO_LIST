import { useState, useEffect } from "react";
import { useTodos } from "./todoContext";
import PrioritySelector from "../components/PrioritySelector";
import Button from "../components/Button";

const TodoForm = ({ onTaskCreated, editTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Maximum");

  const { addTodo, editTodoItem, setEditTodo } = useTodos();

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description || "");
      setPriority(editTodo.priority || "Maximum");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTodo = {
      title,
      description,
      priority,
    };

    if (editTodo) {
      editTodoItem(editTodo.id, newTodo); // Edit existing task
    } else {
      addTodo(newTodo); // Add new task
    }

    setTitle("");
    setDescription("");
    setPriority("Maximum");
    setEditTodo(null);

    // Hide the form after successfully adding or updating the task
    onTaskCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg mb-6 space-y-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        {editTodo ? "Edit Task" : "Add New Task"}
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        <input
          className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />

        <PrioritySelector priority={priority} setPriority={setPriority} />
      </div>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 text-lg"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        rows={4}
        required
      />

      <div className="flex justify-between">
        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-200"
        >
          {editTodo ? "Update Task" : "Add Task"}
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
