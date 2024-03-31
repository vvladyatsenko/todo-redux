import { createStore, applyMiddleware, compose } from 'redux';
import { todosReducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  todosReducer,
  composeEnhancers(
    applyMiddleware()
  )
);

export default store;
