import styles from "./Button.module.css";
interface Props {
  children: string;
  color?: "string";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className="btn btn-atert" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
