import React from "react";
import { Segment, List, Header } from "semantic-ui-react";
import Instruction from "./Instruction";

const RecipeInstructions = ({ recipe }) => {
  return (
    <Segment.Group>
      <Segment textAlign="center" attached="top" color="orange">
        <Header as="h2">Instructions</Header>
      </Segment>
      <Segment attached>
        <List>
          <List.Description style={{ marginBottom: "2em" }}>
            {recipe.description}
          </List.Description>
          {recipe.instructions.map(instruction => (
            <Instruction instruction={instruction} />
          ))}
        </List>
      </Segment>
    </Segment.Group>
  );
};

export default RecipeInstructions;
