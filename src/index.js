import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { storeConfig } from "./Store/storeConfig";
import { BrowserRouter } from "react-router-dom";

const store = storeConfig();

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./Components/App.jsx", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
