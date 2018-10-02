import React, { Component } from "react";
import RecipeHome from "./Recipes/RecipeHome";
import { NavBar } from "./Nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import ExampleComponent from "./ExampleComponent";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Switch>
            <Route exact path="/" component={RecipeHome} />
            <Route path="/example" component={ExampleComponent} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
