import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import RecipeMain from "./Recipes/RecipeMain";
import NavBar from "./Nav/NavBar";
import ExampleComponent from "./ExampleComponent";
import HomePage from "./Home/HomePage";
import RecipeDetail from "./Recipes/RecipeDetail";
import RecipeForm from "./Forms/RecipeForm";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/recipes" component={RecipeMain} />
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route path="/createrecipe" component={RecipeForm} />
            <Route path="/example" component={ExampleComponent} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
