import { configureStore } from '@reduxjs/toolkit';
import todosSliceReducer from './features/todosSlice'

const todos = JSON.parse(localStorage.getItem('todos'));

export default configureStore({
  reducer: {
   todos: todosSliceReducer
  },
  preloadedState: {
    todos: todos ? todos : []
  }
});
