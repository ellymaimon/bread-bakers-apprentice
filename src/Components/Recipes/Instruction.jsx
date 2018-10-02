import React, { Component } from "react";
import { List, Divider } from "semantic-ui-react";

class Instruction extends Component {
  render() {
    const { instruction } = this.props;
    return (
      <List.Item style={{ marginBottom: "2em" }}>
        Step {instruction.stepNumber}: {instruction.step}
        <Divider />
        {instruction.instruction}
      </List.Item>
    );
  }
}

export default Instruction;
