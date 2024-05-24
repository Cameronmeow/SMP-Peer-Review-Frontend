/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Star from "./Star";

function Question(props) {

  return (
    <div className="row d-flex justify-content-center align-items-center h-100 mb-2 mx-2">
      <div className="card rounded-3 text-black p-0 m-0">
        <div className="row g-0">
          <div className="input-group justify-content-center my-3">
            <div className="col-10 p-0 m-0">
              <span
                className="question-title d-block input-group-text text-white"
                style={{
                  background: "#142749 ",
                  fontFamily: "Tilt Neon, sans-serif",
                  fontWeight: "100",
                  fontStyle: "normal",
                }}
              >
                {props.trait}
              </span>
            </div>
            <Star character={props.character} onRatingChange={props.onRatingChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
