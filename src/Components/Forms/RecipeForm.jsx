import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Form,
  Button,
  Icon,
  Grid,
  List
} from "semantic-ui-react";
import { combineValidators, isRequired } from "revalidate";
import { Field, reduxForm } from "redux-form";
import { createRecipe } from "../../Actions/recipeActions";
import Ingredient from "../Recipes/Ingredient";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

const mapState = (state, ownProps) => {
  const recipeId = ownProps.match.params.id;

  let recipe = {};

  if (recipeId && state.recipes.length > 0) {
    recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0];
  }
  
  return {
    initialValues: recipe
  };
};

const actions = {
  createRecipe
};

const formValidation = combineValidators({
  title: isRequired({ message: "The recipe title is required" }),
  description: isRequired({ message: "The recipe description is required" })
});

class RecipeForm extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header as="h2" content="Create a Recipe" />
            <Form>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Recipe name"
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextAreaInput}
                placeholder="Description"
              />
              <Button color="orange" type="button">
                <Icon name="add circle" /> Add Ingredient
              </Button>
              <Button floated="right" positive type="submit">
                Submit
              </Button>
              <Button
                floated="right"
                onClick={this.props.history.goBack}
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment textAlign="center" attached="top" color="orange">
            <Header>Ingredients by Weight & Baker's Percentage</Header>
          </Segment>
          <Segment attached>
            <List divided relaxed>
              {/* {recipe.ingredients.map(ingredient => (
                <Ingredient ingredient={ingredient} key={ingredient.id} />
              ))} */}
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "recipeForm", enableReinitialize: true, formValidation })(
    RecipeForm
  )
);
