import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={"alert alert-primary alert-dismissible"}>
      {children}

      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
