import React, { Component } from "react";
import { List } from "semantic-ui-react";

const listContentStyle = {
  display: "grid",
  gridTemplateColumns: "50% 30% 20%",
  justifyItems: "start",
  alignItems: "center"
};

const ingredientNameSpanStyle = {
  fontSize: "1.1em",
  fontWeight: "bold",
  margin: "0 1em 0.2em 0",
  lineHeight: "1.5em"
};

const ingredientNumbersSpanStyle = {
  justifySelf: "center",
  backgroundColor: "rgb(192, 83, 10)",
  borderRadius: "2px",
  padding: "7px",
  color: "white"
};



class Ingredient extends Component {
  state = {
    isMetric: true
  };

  handleConvertToImperial = () => {
    this.setState({
      isMetric: false
    })
  };

  handleConvertToMetric = () => {
    this.setState({
      isMetric: true
    })
  }

  getOunces =(grams) => {
    grams = grams * 0.035274;
    return parseFloat(grams).toFixed(2);
  }

  render() {
    const { ingredient } = this.props;
    const { isMetric } = this.state;
    return (
      <List.Item>
        <List.Content style={listContentStyle}>
          <span style={ingredientNameSpanStyle}>
            {" "}
            {ingredient.forPreferment && `For ${ingredient.forPreferment}: `}
            {ingredient.name}
          </span>
          {isMetric ? (
            <span onClick={this.handleConvertToImperial} style={ingredientNumbersSpanStyle}>{ingredient.grams}g</span>
          ) : (
            <span onClick={this.handleConvertToMetric} style={ingredientNumbersSpanStyle}>
              {this.getOunces(ingredient.grams)}
              oz
            </span>
          )}
          <span style={ingredientNumbersSpanStyle}>
            {ingredient.bakersPercentage ? ingredient.bakersPercentage : "n/a"}
          </span>
        </List.Content>
      </List.Item>
    );
  }
}

export default Ingredient;
