type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
