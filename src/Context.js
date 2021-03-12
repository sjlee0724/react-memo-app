import React, { useReducer, createContext, useContext, useRef } from "react";

const initialMemos = [
  {
    id: 1,
    title: "1914 translation by H. Rackham",
    text: "1번 메모입니다.",
    current: false,
  },
  {
    id: 2,
    title: "Why do we use it?",
    text: "2번 메모입니다.",
    current: false,
  },
  {
    id: 3,
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "3번 메모입니다.",
    current: true,
  },
];

function MemoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.memo);
    case "CURRENT":
      return state.map((memo) =>
        memo.id === action.id
          ? { ...memo, current: true }
          : { ...memo, current: false }
      );
    case "SAVE":
      return state.map((memo) =>
        memo.id === action.memo.id
          ? {
              ...memo,
              title: action.memo.title,
              text: action.memo.text,
            }
          : memo
      );
    case "REMOVE":
      return state.filter((memo) => memo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(MemoReducer, initialMemos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useMemoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useMemoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useMemoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
