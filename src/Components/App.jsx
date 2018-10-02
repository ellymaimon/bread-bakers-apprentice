import React, { Component } from "react";
import RecipeHome from "./Recipes/RecipeHome";
import { NavBar } from "./Nav/NavBar";
import { Container } from "semantic-ui-react";
import ExampleComponent from "./ExampleComponent";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <RecipeHome />
          <ExampleComponent />
        </Container>
      </div>
    );
  }
}

export default App;
