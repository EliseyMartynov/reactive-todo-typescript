import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import todosSliceReducer from "./features/todosSlice";
import { SingleTodoType } from './components/Todos';

const todos: Array<SingleTodoType>   = JSON.parse(localStorage.getItem("todos"));

const store = configureStore({
  reducer: {
    todos: todosSliceReducer
  },
  preloadedState: {
    todos: todos ? todos : []
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
