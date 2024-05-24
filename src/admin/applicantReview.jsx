/* eslint-disable no-unused-vars */
import React from "react"
import "../App.css"
function applicantReview(props){
    return(
<div className="row d-flex justify-content-center align-items-center h-100" id="cards">
        
        <div className="card rounded-3 text-black p-0 m-0 " style={{border: "none"}}>
          <div className="row g-0" >
            <div className="input-group justify-content-center my-3" style={{borderRadius: "50%"}}>
              <div className="col-10 p-0 m-0 hover-effect" style={{borderRadius: "50%"}}>
                <span
                  className="question-title d-block input-group-text hover-effect"
                  style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}
                >
                  {props.name}
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}
export default applicantReview;