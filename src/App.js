import React from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Input from './components/Input';
import Todos from './components/Todos';
import { DragDropContext } from "react-beautiful-dnd";
import { reorderTodo } from "./features/todosSlice.js";

const App = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source } = result;
    dispatch(reorderTodo({before: source.index, after: destination.index}))
  }

  return (
    <DragDropContext
        onDragEnd={onDragEnd}>
      <Header />
      <Input />
      <Todos />
    </DragDropContext>
  );
}

export default App;
