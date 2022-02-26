/*
* FILE          :   index.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   Hooks on to the DOM for react rendering                
*/
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);