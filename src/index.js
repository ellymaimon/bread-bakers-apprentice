import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { storeConfig } from "./Store/storeConfig";

const store = storeConfig();

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById("root"));
};

if (module.hot) {
  module.hot.accept("./Components/App.jsx", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
