import { CREATE_RECIPE } from '../Constants/recipeConstants';

export const createRecipe = (recipe) => {
  return {
    type: CREATE_RECIPE,
    payload: {
      recipe
    }
  }
}