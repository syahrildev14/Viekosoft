

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`text-sm rounded-full shadow-lg text-white font-medium px-12 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-slate-500 duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
