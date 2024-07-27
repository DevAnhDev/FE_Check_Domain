// rootReducer.js
import { combineReducers } from 'redux';
import domainReducer from './domainReducer';
import telegramReducer from './telegramReducer';

const rootReducer = combineReducers({
  domain: domainReducer,
  telegram: telegramReducer
});

export default rootReducer;