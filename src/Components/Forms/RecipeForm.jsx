import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Form, Button, Icon, Grid } from "semantic-ui-react";
import cuid from "cuid";
import {
  combineValidators,
  composeValidators,
  isRequired,
  isNumeric
} from "revalidate";
import { Field, FieldArray, reduxForm } from "redux-form";
import { createRecipe, updateRecipe } from "../../Actions/recipeActions";
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
  createRecipe,
  updateRecipe
};

const validate = combineValidators({
  title: isRequired({ message: "The recipe title is required" }),
  description: isRequired({ message: "The recipe description is required" }),
  "ingredients[0].name": isRequired({
    message: "The ingredient name is required"
  }),
  "ingredients[0].grams": composeValidators(
    isNumeric({ message: "Grams must be a number" }),
    isRequired({ message: "Ingredient weight is required" })
  )()
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
          name="Remove Ingredient"
          onClick={() => fields.remove(index)}
          style={{ marginBottom: "0.8em" }}
        >
          <Icon name="remove circle" /> Remove Ingredient{" "}
        </Button>
      </Segment>
    ))}
  </div>
);

const renderInstructions = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <Button
      color="orange"
      type="button"
      onClick={() => fields.push({})}
      style={{ marginTop: "0.8em", marginBottom: "0.8em" }}
    >
      <Icon name="add circle" /> Add Instruction Step
    </Button>
    {submitFailed && error && <span>{error}</span>}
    {fields.map((instructions, index) => (
      <Segment key={index}>
        <h4>Step #{index + 1}</h4>
        <Field
          name={`${instructions}.step`}
          type="text"
          component={TextInput}
          placeholder="Step title"
        />
        <Field
          name={`${instructions}.instruction`}
          type="text"
          component={TextAreaInput}
          placeholder="Step instructions"
        />
        <Field
          name={`${instructions}.minutes`}
          type="text"
          component={TextInput}
          placeholder="How long will this step take (in minutes)"
        />
        <Button
          type="button"
          name="Remove Ingredient"
          onClick={() => fields.remove(index)}
          style={{ marginBottom: "0.8em" }}
        >
          <Icon name="remove circle" /> Remove Instruction Step{" "}
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
        photoURL: "/assets/placeholder.jpg",
        createdBy: "Elly Maimon",
        hydration: "70%"
      };
      if (newRecipe.ingredients && newRecipe.instructions) {
        this.props.createRecipe(newRecipe);
        this.props.history.push("/recipes");
      } else {
        alert("Please add ingredients and instructions!");
      }
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
              <FieldArray name="instructions" component={renderInstructions} />
            </Form>
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
  reduxForm({ form: "recipeForm", enableReinitialize: true, validate })(
    RecipeForm
  )
);
