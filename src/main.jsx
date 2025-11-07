import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Stair from "./components/Common/Stair.jsx";
import NavContext from "./context/NavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContext>
        <Stair>
          <App />
        </Stair>
      </NavContext>
    </BrowserRouter>
  </React.StrictMode>
);
