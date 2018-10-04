import React, { Component } from "react";
import { Item, Icon, Popup, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const headerStyle = {
  fontFamily: "'Cinzel Decorative', cursive",
  fontSize: "28px",
  paddingTop: "10px",
  marginBottom: "5px"
};

const popupStyle = {
  display: "inline-block",
  marginRight: "10px"
}

export class Recipe extends Component {
  render() {
    const { recipe, deleteRecipe } = this.props;

    const getTotalWeight = ingredients => {
      let totalWeight = 0;
      ingredients.forEach(ingredient => {
        // eslint-disable-next-line
        totalWeight += parseInt(ingredient.grams);
      });
      return `${totalWeight} grams`;
    };

    const getTotalTime = instructions => {
      let totalMinutes = 0;
      instructions.forEach(instruction => {
        if (instruction.minutes !== undefined) {
          // eslint-disable-next-line
          totalMinutes += parseInt(instruction.minutes);
        }
      });
      return `${Math.floor(totalMinutes / 60)} H, ${totalMinutes % 60} M`;
    };

    return (
      <Segment raised>
        <Item.Group>
          <Item>
            <Item.Image size="small" src={recipe.photoURL} />
            <Item.Content>
              <Item.Header
                as={Link}
                to={`/recipe/${recipe.id}`}
                style={headerStyle}
              >
                {recipe.title}
              </Item.Header>
              <Item.Extra>
                Created by: {recipe.createdBy} on {recipe.date}
              </Item.Extra>
              <Item.Meta style={{ fontSize: "1.1em" }}>
                <div style={popupStyle}>
                  <Popup
                    trigger={<Icon name="tint" />}
                    content="Hydration Percentage: The amount of water relative to the amount of flour in the dough."
                  />{" "}
                  {recipe.hydration}
                </div>
                <div style={popupStyle}>
                  <Popup
                    trigger={<Icon name="weight" />}
                    content="Total Weight: The total final weight of the recipe."
                  />{" "}
                  {getTotalWeight(recipe.ingredients)}
                </div>
                <div style={popupStyle}>
                  <Popup
                    trigger={<Icon name="clock" />}
                    content="About how long this recipe will take to complete including all pre-ferments."
                  />{" "}
                  {getTotalTime(recipe.instructions)}
                </div>
              </Item.Meta>
              <Item.Description style={{ fontSize: "1em" }}>
                {recipe.description}
              </Item.Description>

              <Button
                onClick={deleteRecipe(recipe.id)}
                as="a"
                color="red"
                content="Delete"
                style={{ marginTop: "0.8em" }}
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default Recipe;
