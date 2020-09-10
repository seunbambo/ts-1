import React from "react";
import { React } from "react";
import { Fragment } from "react";

export default function App() {
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick one</p>
    </React.Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
