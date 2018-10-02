import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  example: exampleReducer,
  recipes: recipeReducer
})

export default rootReducer;