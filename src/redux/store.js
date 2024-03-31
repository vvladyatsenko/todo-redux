import { createStore } from 'redux';
import { todosReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todosReducer, composeWithDevTools());

export default store;
