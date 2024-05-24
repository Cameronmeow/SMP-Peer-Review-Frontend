/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Entry(props) {
  return (
    <>
      {props.name && (
      <div
        className="row d-flex justify-content-center align-items-center h-100"
        id="cards"
      >
        <div
          className="card rounded-3 text-black p-0 m-0 "
          style={{ border: "none" }}
        >
          <div className="row g-0">
            <div
              className="input-group justify-content-center my-3"
              style={{ borderRadius: "50%" }}
            >
              <div
                className="col-10 p-0 m-0 hover-effect"
                style={{ borderRadius: "50%" }}
              >
                <Link
                  to={`/review/${props.id}`}
                  className="question-title d-block input-group-text hover-effect"
                  style={{
                    fontFamily: "Tilt Neon, sans-serif",
                    fontWeight: "100",
                    fontStyle: "normal",
                    textDecoration: "none"
                  }}
                >
                  {props.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        )}
    </> 
  );
}
export default Entry;
