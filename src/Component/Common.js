import React, { useState } from "react";
import { Howl, Howler } from "howler";


import cell from "./Images/cell_2x_old.png";
import reset from "./Images/reset_icon.svg";
import info from "./Images/info_icon.svg";
import next from "./Images/next_arrow_icon.svg";

import completion from "./audios/completion_reward_screen.mp3";
import incorrect from "./audios/incorrect_drag_revert.mp3";
import infopopup from "./audios/info_popup_open.mp3";
import move from "./audios/move_to_next_screen.mp3";
import negative from "./audios/negative_feedback.mp3";
import positive from "./audios/positive_feedback.mp3";
import primary from "./audios/primary_click.mp3";
import secondary from "./audios/secondary_click.mp3";





const Common = function Common(props) {

    var secondary = new Audio({secondary})


  const [information, setInformation] = useState("");

  const [disableCell, setDisableCell] = useState(false);
  const [disableNucleus, setDisableNucleus] = useState(false);
  const [disableChromosome, setDisableChromosome] = useState(false);
  const [disableGene, setDisableGene] = useState(false);
  const [disableReset, setDisableReset] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [bgColor, disableBgColor] = useState(true);
  const [textColor, setTextColor] = useState(true);

  const [infoVisible, setInfoVisible] = useState(true);
  const [startVisible, setStartVisible] = useState(false); 
  const [resetVisible, setResetVisible] = useState(true);

  const [bgColor1, disableBgColor1] = useState(true);
  const [textColor1, setTextColor1] = useState(true);

  const [bgColor2, disableBgColor2] = useState(true);
  const [textColor2, setTextColor2] = useState(true);

  const [bgColor3, disableBgColor3] = useState(true);
  const [textColor3, setTextColor3] = useState(true);

  const cellText =
    "All living things are composed of cells. Cells are the building blocks of life.";
  const nucleusText =
    "The cells of all eucaryotic organisms contain a nucleus. Eukaryotic organisms include all animals, plants, fungi, and protists. The nuclues controls the cell's activities and contains the genetic material.";
  const geneText =
    "DNA consists of individual sections called genes. A gene is the basic physical and functional unit of heredity.";
  const chromosomeText =
    "All the DNA of an organism is compacted down into chromosomes held within the nucleus. Humans have 46 chromosomes broken into 23 pairs within each nucleus! Offspring inherit 23 of the chromosomes from their mother, and the other 23 are inherited from their father.";

  const alertpara =
    "All organisms have genetic codes held within their cells. Today,you will explore how genes impact inherited traits.";

  return (
    <div className="main">
      
      {/* Information Box */}
      <div
        id="infoBox"
        className="info-box"
        style={{ display: infoVisible ? "none" : "block" }}
      >
        <p id="info-message">
          <span id="alert-icon">
            <img src={info} alt="Information" />
          </span>
          <div id="alert-para">
            {" "}
            Use the "Next" button to advance through scenarios. Select the "Gene
            A" and "Gene B" buttons to impact the inherited trait.
          </div>
        </p>
        <button
          id="btn-start"
          onClick={() => {
            setInfoVisible(true);
            secondary.play();
          }}
        >
          <span id="startText">Close</span>
        </button>
      </div>

{/* Alert Box */}
      <div id="alertBox" className="alert-box" style={{ display: startVisible ? "none" : "block" }} >
      <p id="alert-message">
        <span id='alert-icon'><img src={info} /></span>
        <div id='alert-para'>
         {alertpara}
        </div>
      </p>
      <button id="btn-start" onClick={()=>{setStartVisible(true)}} >
        <span id="startText">Start</span>
        <img src={next} />
      </button>
    </div>
{/* ResetBox */}
    <div className="reset-box" id='resetBox' style={{ display: resetVisible ? "none" : "block" }}>
          <p id='reset-message'>
            <span id='reset-icon'><img src={info} /></span>
           <div id="reset-para">
           Are you sure you want to reset?
           </div>
           </p>
           <button className='reset-yes-no'  id='reset-no' onClick={()=>{setResetVisible(true)}} >No</button>
          <button className='reset-yes-no'  id='reset-yes' onClick={()=>{setStartVisible(false); setResetVisible(true);setDisableNucleus(false);setDisableCell(false);setDisableChromosome(false); setDisableGene(false); disableBgColor(true); setTextColor(true); disableBgColor1(true); setTextColor1(true); disableBgColor2(true); setTextColor2(true); disableBgColor3(true); setTextColor3(true); setIsVisible(true); setDisableReset(true)}}>Yes</button>
      </div>


      <div className="left-container">
        {/* <div className="leftmain"> */}
        <div className="image-container">
          {/* <div className="bullet" aria-hidden='true'></div>
                <div className="dotted-line" aria-hidden='true'></div> */}
          <img className="cell-diagram" src={cell} alt="cell" />
        </div>

        <div className="cell-button-div">
          <button
            id="Nucleus"
            style={{
              background: bgColor ? "#352103" : "transparent",
              color: textColor ? "white" : "black",
            }}
            className="cell-button"
            disabled={disableNucleus}
            onClick={() => {
              setIsVisible(false);
              setInformation(nucleusText);
              setDisableNucleus(true);
              setDisableReset(false);
              disableBgColor(false);
              setTextColor(false);
            }}
          >
            Nucleus
          </button>
        </div>

        <div className="cell-button-div">
          <button
            id="Gene"
            style={{
              background: bgColor1 ? "#352103" : "transparent",
              color: textColor1 ? "white" : "black",
            }}
            className="cell-button"
            disabled={disableGene}
            onClick={() => {
              setIsVisible(false);
              setInformation(geneText);
              setDisableGene(true);
              setDisableReset(false);

              disableBgColor1(false);
              setTextColor1(false);
            }}
          >
            Gene
          </button>
        </div>
        <div className="cell-button-div">
          <button
            id="Cell"
            style={{
              background: bgColor2 ? "#352103" : "transparent",
              color: textColor2 ? "white" : "black",
            }}
            className="cell-button"
            disabled={disableCell}
            onClick={() => {
              setIsVisible(false);
              setInformation(cellText);
              setDisableCell(true);
              setDisableReset(false);

              disableBgColor2(false);
              setTextColor2(false);
            }}
          >
            Cell
          </button>
        </div>
        <div className="cell-button-div">
          <button
            id="Chromosome"
            style={{
              background: bgColor3 ? "#352103" : "transparent",
              color: textColor3 ? "white" : "black",
            }}
            className="cell-button"
            disabled={disableChromosome}
            onClick={() => {
              setIsVisible(false);
              setInformation(chromosomeText);
              setDisableChromosome(true);
              setDisableReset(false);

              disableBgColor3(false);
              setTextColor3(false);
            }}
          >
            Chromosome
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="right-container">
        <div className="buttons-in-right">
          <button
            className="reset-button"
            id="btn-reset"
            disabled={disableReset}
            onClick={()=>{setResetVisible(false)}}
          >
            <img src={reset} alt="reset" />
            <span id="resetText">Reset</span>
          </button>

          <button
            className="reset-button"
            id="info"
            onClick={() => {
              setInfoVisible(false);
            }}
          >
            <img src={info} alt="info" />
          </button>
        </div>
        <div className="fix-para">
          <p>Click on hotspots to learn more about each structure.</p>
        </div>
        <div
          className="main-information"
          id="main-info"
          style={{ display: isVisible ? "none" : "block" }}
        >
          <>
            <p id="para-container">
              {information} <br />{" "}
            </p>
          </>
          <>
            <button
              id="close-button"
              onClick={() => {
                setInformation("");
                setIsVisible(true);
              }}
            >
              Close
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Common;
