import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddAction,
  CompleteAction,
  EditAction,
  DeleteAction,
  ReorderAction
} from "./todosActionTypes";
import { SingleTodoType } from "../components/Todos";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action: PayloadAction<AddAction>) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    completeTodo(state, action: PayloadAction<CompleteAction>) {
      const { id } = action.payload;
      const x = state.find((item: SingleTodoType) => item.id === id);
      x.completed = !x.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    editTodo(state, action: PayloadAction<EditAction>) {
      const { id, text } = action.payload;
      const x = state.find((item: SingleTodoType) => item.id === id);
      x.text = text;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo(state, action: PayloadAction<DeleteAction>) {
      const { id } = action.payload;
      state = state.filter((item: SingleTodoType) => item.id !== id);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    reorderTodo(state, action: PayloadAction<ReorderAction>) {
      const { before, after } = action.payload;
      const beforeEl = state[before];
      state[before] = state[after];
      state[after] = beforeEl;
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    }
  }
});

export const {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  reorderTodo
} = todosSlice.actions;

export default todosSlice.reducer;
