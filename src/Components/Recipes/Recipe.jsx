import React, { Component } from "react";
import { Item, Icon, Popup, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Recipe extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <Segment raised>
        <Item.Group>
          <Item>
            <Item.Image size="small" src={recipe.photoURL} />
            <Item.Content>
              <Item.Header as={Link} to={`/recipe/${recipe.id}`}>
                {recipe.title}
              </Item.Header>
              <Item.Meta>
                <Popup
                  trigger={<Icon name="tint" />}
                  content="Hydration Percentage: The amount of water relative to the amount of flour in the dough."
                />{" "}
                {recipe.hydration}
              </Item.Meta>
              <Item.Description>{recipe.description}</Item.Description>
              <Item.Extra>
                Created by: {recipe.createdBy} on {recipe.date}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default Recipe;
