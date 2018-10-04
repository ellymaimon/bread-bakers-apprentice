import React, { Component } from "react";
import { Recipe } from "./Recipe";

class RecipeFeed extends Component {
  render() {
    const { recipes, deleteRecipe } = this.props;
    return (
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe}/>
        ))}
      </div>
    );
  }
}

export default RecipeFeed;
