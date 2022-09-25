import React from "react";
import { ReactNotifications } from "react-notifications-component";
import Route from "../../routes";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <ReactNotifications />
      <Route />
    </React.Fragment>
  );
}

export default App;
