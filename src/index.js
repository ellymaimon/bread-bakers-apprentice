import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

if (module.hot) {
  module.hot.accept("./App.jsx", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
