// File: components/Button.jsx
const Button = ({ children, ...props }) => (
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 curs cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
    {...props}
  >
    {children}
  </button>
);

export default Button;
