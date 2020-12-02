import React from "react";
import "./App.css";
import { useAppDispatch } from "./store";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";
import {
  DragDropContext,
  DropResult
} from "react-beautiful-dnd";
import { reorderTodo } from "./features/todosSlice";

const App = () => {
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult): void => {
    const { destination, source } = result;
    const payload = {
      before: source.index,
      after: destination.index
    };
    dispatch(reorderTodo(payload));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      <Input />
      <Todos />
    </DragDropContext>
  );
};

export default App;
