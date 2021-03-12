import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useMemoDispatch } from "../Context";

const Text = styled.div`
  flex: 1;
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #d9480f;
  }
`;

const MemoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => (props.current ? "#fcc419" : "")};
  border: ${(props) =>
    props.current ? "1px solid #495057" : "0.3px solid #ced4da;"};
  &:hover {
    background-color: #fcc419;
    ${Remove} {
      opacity: 1;
    }
  }
  height: 50px;
`;

function Item({ id, text, current }) {
  const dispatch = useMemoDispatch();
  const onToggle = () => {
    dispatch({
      type: "CURRENT",
      id,
    });
  };

  return (
    <MemoItemBlock current={current} onClick={onToggle}>
      <Text id={id}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </MemoItemBlock>
  );
}

export default Item;
