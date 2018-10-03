import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'
import exampleReducer from './exampleReducer';
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  form: FormReducer,
  example: exampleReducer,
  recipes: recipeReducer
})

export default rootReducer;