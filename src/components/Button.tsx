

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`text-md rounded-full shadow-lg font-semibold px-8 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
