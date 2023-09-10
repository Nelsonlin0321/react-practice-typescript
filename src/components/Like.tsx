import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  size: number;
  onClick: () => void;
}

const Like = ({ size, onClick }: Props) => {
  const [isLike, setLike] = useState(false);
  const toggle = () => {
    setLike(!isLike);
    onClick();
  };

  const heart = isLike ? (
    <AiFillHeart size={size} color="#ff6b81" onClick={toggle} />
  ) : (
    <AiOutlineHeart size={size} onClick={toggle} />
  );
  return heart;
};

export default Like;
