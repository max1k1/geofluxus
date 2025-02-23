import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}
