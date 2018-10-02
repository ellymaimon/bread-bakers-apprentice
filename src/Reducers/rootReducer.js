import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  account: accountReducer
})

export default rootReducer;