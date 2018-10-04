import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import RecipeMain from "./Recipes/RecipeMain";
import NavBar from "./Nav/NavBar";
import HomePage from "./Home/HomePage";
import RecipeDetail from "./Recipes/RecipeDetail";
import RecipeForm from "./Forms/RecipeForm";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/recipes" component={RecipeMain} />
                  <Route path="/recipe/:id" component={RecipeDetail} />
                  <Route path="/manage/:id" component={RecipeForm} />
                  <Route path="/createrecipe" component={RecipeForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
