import { useState, useEffect } from "react";
import { useTodos } from "./todoContext";
import PrioritySelector from "../components/PrioritySelector";
import Button from "../components/Button";

const TodoForm = ({ editTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Maximum");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending"); // Default status is "Pending"

  const { addTodo, editTodoItem, setEditTodo } = useTodos();

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description || "");
      setPriority(editTodo.priority || "Maximum");
      setDueDate(editTodo.dueDate || "");
      setStatus(editTodo.status || "Pending");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTodo = {
      title,
      description,
      priority,
      dueDate,
      status,
    };

    if (editTodo) {
      editTodoItem(editTodo.id, newTodo);
    } else {
      addTodo(newTodo);
    }

    setTitle("");
    setDescription("");
    setPriority("Maximum");
    setDueDate("");
    setStatus("Pending");
    setEditTodo(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-4">
        {editTodo ? "Update Your Task" : "Add a New Task"}
      </h2>

      {/* Title Field */}
      <div className="flex flex-col gap-1">
        <label className="text-black font-bold text-2xl">Task Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Finish assignment"
          required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg bg-white"
        />
      </div>

      {/* Priority Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-900 font-bold text-xl">Priority</label>
        <PrioritySelector priority={priority} setPriority={setPriority} />
      </div>

      {/* Description Field */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-900 font-bold text-xl">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., Due next Monday, covers chapters 5-7"
          rows={4}
          required
          className="px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg bg-white"
        />
      </div>

      {/* Due Date Field */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-900 font-bold text-xl">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg bg-white"
        />
      </div>

      {/* Status Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-900 font-bold text-xl">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg bg-white"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          className="py-2 text-lg bg-green-500 px-4 hover:bg-white rounded-full cursor-pointer hover:border-[1px]"
        >
          {editTodo ? "Update Task" : "Add Task"}
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
