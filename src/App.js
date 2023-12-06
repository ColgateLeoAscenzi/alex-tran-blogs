import React from "react";
import './App.css';
import Router from "./Router";
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="main-wrapper">
            <RouterProvider router={Router} />
        </div>
    </div>
  );
}

export default App;
