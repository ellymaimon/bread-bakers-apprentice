import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const detailStyle = {
  fontSize: "1.3em",
  marginRight: "2em",
  color: "grey"
};

const RecipeDetailHeader = ({ recipe }) => {

  const getTotalWeight = (ingredients) => {
    let totalWeight = 0;
    ingredients.forEach((ingredient) => {
      totalWeight += ingredient.grams;
    })
    return `${totalWeight} grams`;
  }

  return (
    <Segment color="orange">
      <Header as="h1">{recipe.title}</Header>
      <span style={detailStyle}>
        <Icon name="tint" />
        {recipe.hydration}
      </span>
      <span style={detailStyle}>
        <Icon name="weight" />
        {getTotalWeight(recipe.ingredients)}
      </span>
      <span>By {recipe.createdBy}</span>
    </Segment>
  );
};

export default RecipeDetailHeader;
