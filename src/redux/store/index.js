// src/redux/store/index.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import the named export thunk
import rootReducer from '../reducers';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
