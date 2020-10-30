import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const {id, text} = action.payload;
      state.push({id, text, completed: false});

      localStorage.setItem('todos', JSON.stringify(state))
    },
    completeTodo(state, action) {
      const { id } = action.payload;
      const x = state.find(item => item.id === id);
      x.completed = !x.completed;
      localStorage.setItem('todos', JSON.stringify(state))
    },
    editTodo(state, action) {
      const { id, text } = action.payload;
      const x = state.find(item => item.id === id);
      x.text = text;
      localStorage.setItem('todos', JSON.stringify(state))
    },
    deleteTodo(state, action) {
      const { id } = action.payload;
      state = state.filter(item => item.id !== id)
      localStorage.setItem('todos', JSON.stringify(state))
      return state
    },
    reorderTodo(state, action) {
      const {before, after} = action.payload;
      const beforeEl = state[before];
      state[before] = state[after];
      state[after] = beforeEl;
      localStorage.setItem('todos', JSON.stringify(state))
      return state
    }
  }
})

export const {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  reorderTodo
      } = todosSlice.actions

export default todosSlice.reducer
