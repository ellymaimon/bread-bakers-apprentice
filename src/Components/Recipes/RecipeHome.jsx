import React, { Component } from "react";
import RecipeFeed from "./RecipeFeed";

class RecipeHome extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Home</h1>
        <RecipeFeed />
      </div>
    );
  }
}

export default RecipeHome;
