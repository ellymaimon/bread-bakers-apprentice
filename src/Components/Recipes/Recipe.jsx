import React, { Component } from "react";
import { Item } from "semantic-ui-react";

export class Recipe extends Component {
  render() {
    return (
      <Item>
        <Item.Image size="medium" src="/assets/baguette.jpg" />

        <Item.Content>
          <Item.Header>Classic French Baguette</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>This is a recipe.</Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default Recipe;
