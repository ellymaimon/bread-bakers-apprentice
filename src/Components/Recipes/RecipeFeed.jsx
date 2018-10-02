import React, { Component } from "react";
import { Recipe } from "./Recipe";

class RecipeFeed extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeFeed;
