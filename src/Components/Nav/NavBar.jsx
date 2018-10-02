import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <Menu size="huge" inverted fixed="top">
        <Menu.Item as={Link} to="/" name="Home" header />
        <Menu.Item as={NavLink} to="/myrecipes" name="My Recipes" />
        <Menu.Item as={NavLink} to="/example" name="Example" />
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
