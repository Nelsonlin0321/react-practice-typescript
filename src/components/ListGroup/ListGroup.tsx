import { Fragment, useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  handelItem: (item: string) => void;
}

//  define css-in-js tag object

const List = styled.ul`
  background-color: aqua;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

function ListGroup({ items, heading, handelItem }: Props) {
  const [selectedIndex, SetSelectedIndex] = useState(-1);
  return (
    <Fragment>
      <h1>{heading}</h1>
      <List>
        {items.length === 0 && <p> Not Item Found</p>}
        {items.map((item, index) => (
          <ListItem
            key={index}
            active={index == selectedIndex}
            onClick={() => {
              SetSelectedIndex(index);
              handelItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default ListGroup;
