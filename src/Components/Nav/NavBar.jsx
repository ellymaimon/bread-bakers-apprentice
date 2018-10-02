import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <Menu size="huge" inverted fixed="top">
        <Menu.Item name="Logo" header />
        <Menu.Item name="Recipes" />
        <Menu.Item as={NavLink} to="/example" name="Example" />
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
