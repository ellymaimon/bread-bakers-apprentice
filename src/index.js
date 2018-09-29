import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";

let render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

if (module.hot) {
  module.hot.accept("./App/App.jsx", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
