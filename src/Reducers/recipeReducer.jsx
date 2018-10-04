import { createReducer } from '../Reducers/reducerUtility';
import { dummyRecipes } from './preLoadedData';
import { CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from '../Constants/recipeConstants'

const initialState = dummyRecipes;

export const createRecipe = (state, payload) => {
  return [...state, Object.assign({}, payload.recipe)]
}

export const updateRecipe = (state, payload) => {
  return [
    ...state.filter(recipe => recipe.id !== payload.recipe.id),
    Object.assign({}, payload.recipe)
  ]
}

export const deleteRecipe = (state, payload) => {
  return [...state.filter(recipe => recipe.id !== payload.recipeId)]
}

export default createReducer(initialState, {
  [CREATE_RECIPE]: createRecipe,
  [UPDATE_RECIPE]: updateRecipe,
  [DELETE_RECIPE]: deleteRecipe
});
