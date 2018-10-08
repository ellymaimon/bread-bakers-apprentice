import React from "react";
import { Button, Icon } from "semantic-ui-react";

const background = "../assets/bg.jpg";

const imgBg = {
  minHeight: "100%",
  minWidth: "1024px",
  width: "100%",
  height: "auto",
  position: "fixed",
  top: "0",
  left: "0",
  filter: "brightness(30%)"
};

const buttonStyle = {
  position: "absolute",
  top: "80%",
  right: "10%"
};

const HomePage = ({ history }) => {
  return (
    <div>
      <img src={background} style={imgBg} alt="Background bread" />
      <h1 className="homepage">Bread Baker's Apprentice</h1>
      <Button
        color="orange"
        size="massive"
        inverted
        style={buttonStyle}
        onClick={() => history.push("/recipes")}
      >
        {" "}
        Let's Bake! <Icon name="arrow right" />{" "}
      </Button>
    </div>
  );
};

export default HomePage;
