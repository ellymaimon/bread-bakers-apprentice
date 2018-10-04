import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
    this.props.history.push("/recipes");
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false
    });
    this.props.history.push("/");
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <Menu size="huge" fixed="top">
        <Menu.Item
          as={Link}
          to="/"
          name="Bread Baker's Apprentice"
          header
        />
        <Menu.Item as={NavLink} to="/recipes" name="Recipes" />
        {loggedIn ? (
          <Menu.Item position="right">
            <Button
              as={Link}
              to="/createrecipe"
              content="Create Recipe"
              color="orange"
              inverted
              style={{ marginRight: "0.5em" }}
            />
            <Button onClick={this.handleLogout} basic content="Logout" />
          </Menu.Item>
        ) : (
          <Menu.Item position="right">
            <Button onClick={this.handleLogin} basic content="Login" />
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

export default withRouter(NavBar);
