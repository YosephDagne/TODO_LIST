import { useState, useEffect } from "react";
import { useTodos } from "./todoContext";
import PrioritySelector from "../components/PrioritySelector";
import Button from "../components/Button";

const TodoForm = ({ editTodo }) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* <h2 className="text-xl font-semibold text-orange-500">
        {editTodo ? "Edit Task" : "Add New Task"}
      </h2> */}

      {/* Title Input */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* Priority Selector */}
      <PrioritySelector priority={priority} setPriority={setPriority} />

      {/* Description Textarea */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        rows={4}
        required
        className="px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* Submit Button */}
      <div className="mt-2">
        <Button type="submit">{editTodo ? "Update Task" : "Add Task"}</Button>
      </div>
    </form>
  );
};

export default TodoForm;
