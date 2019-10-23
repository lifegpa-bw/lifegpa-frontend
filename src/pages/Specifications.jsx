
      import React from "react";
      import ReactDOM from "react-dom";
      
      import { CircularProgressbar } from 'react-circular-progressbar';
      import 'react-circular-progressbar/dist/styles.css';
      
      import "./styles.css";
      import {specifications} from "../testData"

      function Specifications() {
        return (
          <div className="App">
            <h1>Specifications</h1>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
        );
      }
      
      export default Specifications;
      