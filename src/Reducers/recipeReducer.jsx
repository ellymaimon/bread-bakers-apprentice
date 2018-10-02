import { createReducer } from '../Reducers/reducerUtility';
import { dummyRecipes } from './preLoadedData';
import { CREATE_RECIPE } from '../Constants/recipeConstants'

const initialState = dummyRecipes;

export const createRecipe = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export default createReducer(initialState, {
  [CREATE_RECIPE]: createRecipe
});
