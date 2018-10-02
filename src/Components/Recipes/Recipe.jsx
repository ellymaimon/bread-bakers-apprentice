import React, { Component } from "react";
import { Item, Icon, Popup } from "semantic-ui-react";
import Ingredient from "./Ingredient";

export class Recipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <Item.Group>
        <Item>
          <Item.Image size="small" src={recipe.photoURL} />
          <Item.Content>
            <Item.Header>{recipe.title}</Item.Header>
            <Item.Meta>
              <Popup
                trigger={<Icon name="tint" />}
                content="Hydration Percentage: The amount of water relative to the amount of flour in the dough."
              />{" "}
              {recipe.hydration}
            </Item.Meta>
            <Item.Description>{recipe.description}</Item.Description>
            <Item.Meta>Ingredients:</Item.Meta>
            <Item.Description>
              {recipe.ingredients.map(ingredient => (
                <Ingredient ingredient={ingredient} key={ingredient.id} />
              ))}
            </Item.Description>
            <Item.Extra>Created: {recipe.date}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default Recipe;
