// File: components/PrioritySelector.jsx
const PrioritySelector = ({ priority, setPriority }) => (
  <select
    className="p-2 border border-gray-300  bg-white rounded-xl"
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
  >
    <option>Maximum</option>
    <option>Medium</option>
    <option>Minimum</option>
  </select>
);

export default PrioritySelector;
