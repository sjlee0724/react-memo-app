import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMemoState, useMemoDispatch } from "../Context";

const FormBlock = styled.div`
  flex: 0.9;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const HeadBlock = styled.h1`
  text-align: center;
`;

const TitleBlock = styled.input`
  padding: 12px;
  font-size: 18px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  outline: none;
`;

const DescriptionInput = styled.textarea`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 2px;
  height: 610px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px;
  margin: 4px;
  margin-bottom: 10px;
  border: 1px solid #dee2e6;

  outline: none;
  font-size: 16px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: #ffe066;
  }
`;

const showDetail = true;

function Form() {
  const memos = useMemoState();
  const dispatch = useMemoDispatch();
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    text: "",
  });
  const { title, text } = inputs;

  useEffect(() => {
    memos.map((memo) => {
      if (memo.current) {
        setInputs({
          id: memo.id,
          title: memo.title,
          text: memo.text,
        });
      }
      return 0;
    });
  }, [memos]);

  const save = () => {
    dispatch({
      type: "SAVE",
      memo: inputs,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <FormBlock>
      <HeadBlock>NotePad</HeadBlock>
      {showDetail && (
        <>
          <ButtonBlock>
            <Button onClick={save}>Save</Button>
          </ButtonBlock>
          <TitleBlock
            name="title"
            onChange={onChange}
            placeholder="Title"
            value={title}
          />
          <DescriptionInput
            name="text"
            onChange={onChange}
            placeholder="..."
            value={text}
          />
        </>
      )}
    </FormBlock>
  );
}

export default Form;
