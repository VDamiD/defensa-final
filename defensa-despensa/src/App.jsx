import { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import Productos from "./pages/Productos";

function App() {
  return (
    <>
      <Login />
      <hr />
      <br />
      <br />

      <Productos />
    </>
  );
}

export default App;
