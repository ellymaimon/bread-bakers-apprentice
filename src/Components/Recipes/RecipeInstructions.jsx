import React from "react";
import { Segment, List, Header } from "semantic-ui-react";
import Instruction from "./Instruction";

const RecipeInstructions = ({ recipe }) => {
  return (
    <Segment.Group>
      <Segment textAlign="center" attached="top" color="orange" style={{borderBottom: "none"}}>
        <Header as="h2">Instructions</Header>
      </Segment>
      <Segment attached>
        <List>
          {recipe.instructions.map(instruction => (
            <Instruction instruction={instruction} key={instruction.stepNumber} />
          ))}
        </List>
      </Segment>
    </Segment.Group>
  );
};

export default RecipeInstructions;
