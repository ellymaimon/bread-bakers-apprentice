import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  form: FormReducer,
  recipes: recipeReducer
})

export default rootReducer;