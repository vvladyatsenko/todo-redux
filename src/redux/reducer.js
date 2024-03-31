import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';

const initialState = {
  todos: [],
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TASK:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
}
