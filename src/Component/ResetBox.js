import React, { useState } from 'react'
import info from "./Images/info_icon.svg"
import Alert from './AlertBox'
import Home from './Home'

export default function ResetBox() {

   const [resetBox,setResetBox] = useState("")

  return (
      <div className="reset-box" id='resetBox'>
          <p id='reset-message'>
            <span id='reset-icon'><img src={info} /></span>
           <div id="reset-para">
           {resetBox}
           </div>
           </p>
           <button className='reset-yes-no'  id='reset-no'>No</button>
          <button className='reset-yes-no'  id='reset-yes'>Yes</button>
      </div>
  )
}
