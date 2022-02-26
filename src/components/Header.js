/*
* FILE          :   Header.js
* PROJECT       :   SENG3080 - Assignment 1
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-02-25
* DESCRIPTION   :   Renders the header for the app                
*/
import React from "react";

const Header = ( {onChangeView, view} ) => {
  console.log(view)
  return (
    <div className="ui secondary pointing menu">
      {
        view === "search"
          ? <p className="header-option"><button style={{fontWeight: 'bold'}} className="item" >Search</button></p>
          : <p className="header-option"><button className="item" onClick={() =>onChangeView()}>Search</button></p>
      }
      {
        view === "saved"
          ? <p className="header-option"><button style={{fontWeight: 'bold'}} className="item" >Saved Items</button></p>
          : <p className="header-option"><button className="item" onClick={() =>onChangeView()}>Saved Items</button></p>
      }
    </div>
  )
};

export default Header;