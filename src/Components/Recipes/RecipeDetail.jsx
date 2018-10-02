import React from "react";
import { connect } from "react-redux";
import { Grid, Segment, Header, Image } from "semantic-ui-react";
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
          <Header>Ingredients</Header>
        </Segment>
        <Segment attached>
          {recipe.ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} />
          ))}
        </Segment>
        <Segment>
          <Image src={recipe.photoURL} size="large" />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(RecipeDetail);
