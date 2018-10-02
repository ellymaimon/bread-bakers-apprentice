import React, { Component } from "react";
import RecipeFeed from "./RecipeFeed";
import { Grid } from 'semantic-ui-react'

class RecipeMain extends Component {
  render() {
    return (
      <Grid>
        <RecipeFeed />
      </Grid>
    );
  }
}

export default RecipeMain;
