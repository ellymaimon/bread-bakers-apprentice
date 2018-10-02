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
    this.props.history.push("/recipes")
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
        <Menu.Item as={Link} to="/recipes" name="Bread Baker's Apprentice" header />
        <Menu.Item as={NavLink} to="/example" name="Example" />
        <Menu.Item position="right">
          {loggedIn ? (
            <Button onClick={this.handleLogout} basic content="Logout" />
          ) : (
            <Button onClick={this.handleLogin} basic content="Login" />
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
