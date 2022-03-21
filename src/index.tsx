import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import UseStateLesson from "./lesson/UseStateLesson"; // useStateのレッスン
// import UseEffectLesson from "./lesson/UseEffectLesson"; // useEffectのレッスン
import UseReducerLesson from "./lesson/UseReducerLesson"; // useReducerのレッスン

ReactDOM.render(
  <React.StrictMode>
    <UseReducerLesson />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
