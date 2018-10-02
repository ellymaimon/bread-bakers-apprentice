import React, { Component } from "react";
import { List } from "semantic-ui-react";

class Ingredient extends Component {
  render() {
    const { ingredient } = this.props;
    return (
      <List.Item>
        {ingredient.forPreferment && `For ${ingredient.forPreferment}: `}
        {ingredient.quantity} {ingredient.measurement} of{" "}
        {ingredient.temperature && ingredient.temperature} {ingredient.name}
      </List.Item>
    );
  }
}

export default Ingredient;
