import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
