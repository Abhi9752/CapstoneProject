import React from 'react'
import info from "./Images/info_icon.svg";


export default function Info() {

  

  return (
    <div id="infoBox" className="info-box" >
      <p id="info-message">
        <span id='alert-icon'><img src={info} alt='Information' /></span>
        <div id='alert-para'> Use the "Next" button to advance through scenarios. Select the "Gene A" and "Gene B" buttons
        to impact the inherited trait. 
        </div>
      </p>
      <button id="btn-start">
        <span id="startText">Close</span>
      </button>
    </div>
  )
}
