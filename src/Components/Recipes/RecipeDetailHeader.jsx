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

  const getTotalTime = (instructions) => {
    let totalMinutes = 0;
    instructions.forEach((instruction) => {
      if(instruction.minutes !== undefined) {
        totalMinutes += instruction.minutes;
      }
    })
    console.log(totalMinutes);
    
    return `${Math.floor(totalMinutes / 60)} H, ${totalMinutes % 60} M`;
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
      <span style={detailStyle}>
        <Icon name="clock" />
        {getTotalTime(recipe.instructions)}
      </span>
      <span>By {recipe.createdBy}</span>
    </Segment>
  );
};

export default RecipeDetailHeader;
