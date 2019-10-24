
import React from "react";
import ReactDOM from "react-dom";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import "./styles.css";
import { specifications } from "../testData"

function Specifications() {
  return (
    <div className="wrapper">
      <h1>Specifications</h1>
      <div className="specifications">
      <CircularProgressbar className="progressBar" value={specifications.exercise} text={`${specifications.exercise}%`} />
      <CircularProgressbar className="progressBar" value={specifications.diet} text={`${specifications.diet}%`} />
      <CircularProgressbar className="progressBar" value={specifications.hygiene} text={`${specifications.hygiene}%`} />
      <CircularProgressbar className="progressBar" value={specifications.social} text={`${specifications.social}%`} />
      <CircularProgressbar className="progressBar" value={specifications.drugs} text={`${specifications.drugs}%`} />
  </div>
  </div>
  )
}

export default Specifications
