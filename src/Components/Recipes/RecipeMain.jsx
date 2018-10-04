import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeFeed from "./RecipeFeed";
import { Grid } from "semantic-ui-react";
import { deleteRecipe } from "../../Actions/recipeActions";

const mapState = state => ({
  recipes: state.recipes
});

const actions = {
  deleteRecipe
};

class RecipeMain extends Component {
  handleDeleteRecipe = recipeId => () => {
    this.props.deleteRecipe(recipeId);
  };

  render() {
    const { recipes } = this.props;
    return (
      <Grid>
        <RecipeFeed recipes={recipes} deleteRecipe={this.handleDeleteRecipe} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(RecipeMain);
