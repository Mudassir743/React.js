import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`  list-style: none;
padding: 0px

}`;

interface ListItemsProps {
  active: boolean;
}
const ListItems = styled.li<ListItemsProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItems: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItems }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> List not found</p>}
      <List className={"list-group"} style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <ListItems
            active={index === selectedIndex}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItems(item);
            }}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}
export default ListGroup;

//   const handleincreament = () => {
//     setNumber(numbers + 1);
//   };
//   let [numbers, setNumber] = useState(0);
//   return (
//     <>
//       <button onClick={handleincreament}>Click Here</button>
//       <button onClick={() => setNumber(numbers - 1)}>Click Here</button>
//       <button onClick={() => setNumber((numbers = 0))}>Click Here</button>
//       {numbers}
//     </>
//   );
// }
