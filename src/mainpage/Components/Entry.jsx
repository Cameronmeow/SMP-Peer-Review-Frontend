/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../App.css";

function Entry({ id, name, isReviewed, onClick }) {
  const [isVisited, setIsVisited] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (isReviewed) {
      toast.error("Review already submitted", { autoClose: 3000 });
    } else {
      setIsVisited(true);
      onClick(id); // Call the onClick prop to handle navigation or other actions
    }
  };

  return (
    <>
      {name && (
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          id="cards"
        >
          <div
            className="card rounded-3 text-black p-0 m-0"
            style={{
              border: "none",
              backgroundColor: "white",
            }}
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
                    to="#"
                    className={`question-title d-block input-group-text hover-effect ${isReviewed ? "reviewed" : ""}`}
                    onClick={handleClick}
                    style={{
                      fontFamily: "Tilt Neon, sans-serif",
                      fontWeight: "100",
                      fontStyle: "normal",
                      textDecoration: "none",
                    }}
                  >
                    {name}
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