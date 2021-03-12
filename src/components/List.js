import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useMemoState, useMemoDispatch, useMemoNextId } from "../Context";

const ListForm = styled.div`
  flex: 0.3;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: column;
  border-right: 0.3px solid #ced4da;
`;

const ListBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const CreateButton = styled.button`
  margin-left: 32%;
  margin-top: 10%;
  margin-bottom: 2%;
  font-size: 17px;
  background-color: white;
  width: 110px;
  border-radius: 4px;
  &:hover {
    background-color: #fcc419;
  }
  border: 0.3px solid #ced4da;
`;

function List() {
  const memos = useMemoState();
  const dispatch = useMemoDispatch();
  const nextId = useMemoNextId();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      memo: {
        id: nextId.current,
        date: "2020-20-20",
        title: "New Post!",
        text: "",
        current: true,
      },
    });
    dispatch({
      type: "CURRENT",
      id: nextId.current,
    });
    nextId.current += 1;
  };

  return (
    <>
      <ListForm>
        <CreateButton onClick={onSubmit}>new memo</CreateButton>
        <ListBlock>
          {memos.map((memo) => (
            <Item
              onClick={ontoggle}
              key={memo.id}
              id={memo.id}
              text={memo.title}
              current={memo.current}
            />
          ))}
        </ListBlock>
      </ListForm>
    </>
  );
}

export default List;
