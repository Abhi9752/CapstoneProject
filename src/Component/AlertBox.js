import React, { useState } from "react";
import info from "./Images/info_icon.svg";
import next from "./Images/next_arrow_icon.svg";
import Home from "./Home";



export default function Alert() {

  

  return (
    <div id="alertBox" className="alert-box">
      <p id="alert-message">
        <span id='alert-icon'><img src={info} /></span>
        <div id='alert-para'>
         All organisms have genetic codes held within their cells.
         Today,you will explore how genes impact inherited traits. 
        </div>
      </p>
      <button id="btn-start"  >
        <span id="startText">Start</span>
        <img src={next} />
      </button>
    </div>
  );
}
