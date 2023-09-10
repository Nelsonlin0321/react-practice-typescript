import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const [isExpanded, setExpand] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <>
      <div>{text}</div>
      <button onClick={() => setExpand(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
