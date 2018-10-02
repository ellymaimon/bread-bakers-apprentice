import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeFeed from "./RecipeFeed";
import { Grid } from 'semantic-ui-react'

const mapState = state => ({
  recipes: state.recipes
});

class RecipeMain extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <Grid>
        <RecipeFeed recipes={recipes} />
      </Grid>
    );
  }
}

export default connect(mapState)(RecipeMain);
