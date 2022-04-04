import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";



// THIS WORKS FOR THE TRAVEL JOURNAL SOLO PROJECT

import App from "./components/Travel Journal/App";
import "./components/Travel Journal/TravelJournalStyle.css";

ReactDOM.render(
  <div className="container">
    <App/>
  </div>,
  document.getElementById('root')
)

