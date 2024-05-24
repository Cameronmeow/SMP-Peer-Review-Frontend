/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Comments(props) {
  
  const handleCommentsChange = (event) => {
    props.onCommentsChange(props.character, event.target.value);
  };
  
  return (
    
    <div className="row d-flex justify-content-center align-items-center h-100 m-2" style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}>
          <div className="card rounded-3 text-black p-0 m-0">
            <div className="row g-0">
              <div className="input-group justify-content-center my-3 ">
                <div className="col-10 p-0 m-0">
              <div className="col-12 p-0">
                
                <span            
                  className="question-title d-block input-group-text text-white"
                  style={{ background: "#142749 " }}
                >
                  {props.text}
                </span>
                
                <textarea    
                  type="text"
                  id="q_9"
                  className="form-control mb-2"
                  style={{background: "#DDDDDD", }}
                  placeholder={props.innerText}
                  onChange={handleCommentsChange}
                ></textarea>
                <small
                  className="text-left float-left text-dark font-italic"
                  style={{background: "#FFC10B", borderRadius: "4px"}}
                >
                  {props.bottomText}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments