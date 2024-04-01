import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {

      state.push({ id: action.payload.id, text: action.payload.text });
    },
    deleteTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].text = action.payload.text;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = todosSlice.actions;

export default todosSlice.reducer;
