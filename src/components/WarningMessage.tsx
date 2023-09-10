import styled from "styled-components";

interface Props {
  children?: string;
  color?: string;
}

interface messageProps {
  color: string;
}

const Message = styled.p<messageProps>`
  color: ${(props) => props.color};
`;

const WarningMessage = ({ color = "red", children }: Props) => {
  return <Message color={color}>{children}</Message>;
};

export default WarningMessage;
