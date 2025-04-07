import { useState, useEffect } from "react";
import { useTodos } from "./todoContext";
import PrioritySelector from "../components/PrioritySelector";
import Button from "../components/Button";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Maximum");

  const { addTodo, editTodo, editTodoItem, setEditTodo } = useTodos();

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description || "");
      setPriority(editTodo.priority || "Maximum");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      title,
      description,
      priority,
    };

    if (editTodo) {
      editTodoItem(editTodo.id, newTodo);
    } else {
      addTodo(newTodo);
    }

    setTitle("");
    setDescription("");
    setPriority("Maximum");
    setEditTodo(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md mb-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        {editTodo ? "Edit Task" : "Add New Task"}
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />

        <PrioritySelector priority={priority} setPriority={setPriority} />
      </div>

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description (optional)"
        rows={3}
      />

      <div className="text-right">
        <Button type="submit">{editTodo ? "Update Task" : "Add Task"}</Button>
      </div>
    </form>
  );
};

export default TodoForm;
