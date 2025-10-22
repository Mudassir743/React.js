import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const tuggle = () => {
    setStatus(!status);
    onClick();
  };
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <AiFillHeart
        style={{ cursor: "pointer" }}
        color="red"
        size={70}
        onClick={tuggle}
      />
    );
  return (
    <AiOutlineHeart style={{ cursor: "pointer" }} size={70} onClick={tuggle} />
  );
};

export default Like;
