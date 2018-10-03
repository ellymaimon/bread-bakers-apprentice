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
import cuid from "cuid";
import { combineValidators, isRequired } from "revalidate";
import { Field, FieldArray, reduxForm } from "redux-form";
import { createRecipe } from "../../Actions/recipeActions";
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

const renderIngredients = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <Button
      color="orange"
      type="button"
      onClick={() => fields.push({})}
      style={{ marginBottom: "0.8em" }}
    >
      <Icon name="add circle" /> Add Ingredient
    </Button>
    {submitFailed && error && <span>{error}</span>}
    {fields.map((ingredients, index) => (
      <Segment key={index}>
        <h4>Ingredient #{index + 1}</h4>
        <Field
          name={`${ingredients}.name`}
          type="text"
          component={TextInput}
          placeholder="Ingredient name"
        />
        <Field
          name={`${ingredients}.grams`}
          type="text"
          component={TextInput}
          placeholder="Weight in grams"
        />
        <Button
          type="button"
          content="Remove Ingredient"
          onClick={() => fields.remove(index)}
          style={{ marginBottom: "0.8em" }}
        >
          <Icon name="remove circle" /> Remove Ingredient{" "}
        </Button>
      </Segment>
    ))}
  </div>
);

class RecipeForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateRecipe(values);
      this.props.history.goBack();
    } else {
      const newRecipe = {
        ...values,
        id: cuid(),
        photoURL: "/assets/user.png",
        createdBy: "Epicodus Student"
      };
      this.props.createRecipe(newRecipe);
      this.props.history.push("/recipes");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment style={{ paddingBottom: "1em" }}>
            <Header as="h2" content="Create a Recipe" />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              id="recipeForm"
            >
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
              <Button
                floated="right"
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button
                floated="right"
                onClick={this.props.history.goBack}
                type="button"
              >
                Cancel
              </Button>
              <FieldArray name="ingredients" component={renderIngredients} />
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
