/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function RatingBox({ text, innerText, value, onChange }) {
  return (
    <div className="row d-flex justify-content-center align-items-center h-50" style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal" }}>
      <div className="card rounded-3 text-black p-0 m-0">
        <div className="row g-0">
          <div className="input-group justify-content-center my-0">
            <div className="col-10 p-0 m-0">
              <div className="col-12 p-0">
                <span
                  className="question-title d-block input-group-text text-white"
                  style={{ background: "#142749 " }}
                >
                  {text}
                </span>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  style={{ background: "#DDDDDD" }}
                  placeholder={innerText}
                  value={value}
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingBox;

// import React from "react";

// function RatingBox(props) {
//   return (
    
//     <div className="row d-flex justify-content-center align-items-center h-50" style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}>
//           <div className="card rounded-3 text-black p-0 m-0">
//             <div className="row g-0">
//               <div className="input-group justify-content-center my-0">
//                 <div className="col-10 p-0 m-0">
//                 <div className="col-12 p-0">
//           <span
//             className="question-title d-block input-group-text text-white"
//             style={{background: "#008DDA"}}
//           >
//             {props.text}
//           </span>
//           <textarea
//           type="text"
//           id="q_9"
//           className="form-control mb-2"
//           style={{background: "#DDDDDD", }}
//           placeholder={props.innerText}
//           aria-label=""
//           aria-describedby=""
//         ></textarea>
//       </div>
//       </div>
//               </div>
//             </div>
//           </div>
//       </div>
      
//   );
// }


// export default RatingBox