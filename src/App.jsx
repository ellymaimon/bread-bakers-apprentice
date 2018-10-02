import React, { Component } from 'react';
import RecipeHome from './Recipes/RecipeHome';
import { NavBar } from './Nav/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <RecipeHome />
      </div>
    );
  }
}

export default App;
