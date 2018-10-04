import React from "react";
import { connect } from "react-redux";
import { Grid, Segment, Header, Image, List, Message } from "semantic-ui-react";
import Ingredient from "./Ingredient";
import RecipeDetailHeader from "./RecipeDetailHeader";
import RecipeInstructions from "./RecipeInstructions";

const mapState = (state, ownProps) => {
  const recipeId = ownProps.match.params.id;

  let recipe = {};

  if (recipeId && state.recipes.length > 0) {
    recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0];
  }

  return {
    recipe
  };
};

const RecipeDetail = ({ recipe }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <RecipeDetailHeader recipe={recipe} />
        <RecipeInstructions recipe={recipe} />
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment textAlign="center" attached="top" color="orange">
          <Header>Ingredients by Weight & Baker's Percentage</Header>
        </Segment>
        <Segment attached>
          <List divided relaxed>
            {recipe.ingredients.map(ingredient => (
              <Ingredient ingredient={ingredient} key={ingredient.id} />
            ))}
          </List>
          <Message color="orange" attached>Click on the weights to toggle between Metric and Imperial measurements!</Message>
        </Segment>
        <Segment>
          <Image src={recipe.photoURL} size="large" />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(RecipeDetail);
