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
      <Menu size="huge" inverted fixed="top">
        <Menu.Item as={Link} to="/" name="Home" header />
        {loggedIn && (
          <Menu.Item as={NavLink} to="/myrecipes" name="My Recipes" />
        )}

        <Menu.Item as={NavLink} to="/example" name="Example" />
        <Menu.Item position="right">
          {loggedIn ? (
            <Button
              onClick={this.handleLogout}
              basic
              inverted
              content="Logout"
            />
          ) : (
            <Button onClick={this.handleLogin} basic inverted content="Login" />
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
