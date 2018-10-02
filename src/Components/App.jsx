import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import RecipeMain from "./Recipes/RecipeMain";
import NavBar from "./Nav/NavBar";
import ExampleComponent from "./ExampleComponent";
import HomePage from "./Home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/recipes" component={RecipeMain} />
            <Route path="/example" component={ExampleComponent} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
