import React from "react";
import { Segment, Header, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const detailStyle = {
  fontSize: "1.3em",
  marginRight: "2em",
  color: "grey"
};

const RecipeDetailHeader = ({ recipe }) => {
  const getTotalWeight = ingredients => {
    let totalWeight = 0;
    ingredients.forEach(ingredient => {
      // eslint-disable-next-line
      totalWeight += parseInt(ingredient.grams);
    });
    return `${totalWeight} grams`;
  };

  const getTotalTime = instructions => {
    let totalMinutes = 0;
    instructions.forEach(instruction => {
      if (instruction.minutes !== undefined) {
        // eslint-disable-next-line
        totalMinutes += parseInt(instruction.minutes);
      }
    });
    return `${Math.floor(totalMinutes / 60)} H, ${totalMinutes % 60} M`;
  };

  return (
    <Segment color="orange">
      <Header as="h1">{recipe.title}</Header>
      <List.Description style={{ marginBottom: "2em" }}>
        {recipe.description}
      </List.Description>
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
      <Button
        as={Link}
        to={`/manage/${recipe.id}`}
        color="orange"
        inverted
        floated="right"
        style={{position: "relative", bottom: "11px"}}
      >
        Edit Recipe
      </Button>
      <span>By {recipe.createdBy}</span>
    </Segment>
  );
};

export default RecipeDetailHeader;
