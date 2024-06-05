// eslint-disable-next-line no-unused-vars
import React from "react";
import "../style.css"
import logo from "../logo_dark.svg";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(){

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.clear();
    // Perform login logic here
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        "https://smp-review-portal.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      // console.log(data);
      if (data.success) {
        toast.success(`Login successful: \n${data.details.fullname}`, {
          autoClose: 3000, // Custom duration in milliseconds (3 seconds)
          onClose: () => {
            // Store token in localStorage
            localStorage.setItem("token", data.details["Jwt Token"]);
            localStorage.setItem("reviewerName", `${data.details["fullname"]}`);
            localStorage.setItem("username", `${data.details["username"]}`);
            localStorage.setItem("id", `${data.details.id}`);
            localStorage.setItem(
              "reviewedApplicants",
              JSON.stringify(data.details.reviewedApplicants)
            );
            // Redirect to /recommendations after toast closes
            navigate("/recommendations");
          },
        });
        localStorage.setItem("token", data["Jwt Token"]); // Store token in localStorage
        localStorage.setItem("reviewerName", `${data["fullname"]}`);
      } else {
        toast.error(data.message, {
          autoClose: 3000, // Custom duration in milliseconds (3 seconds)
        });
      }
    } catch (err) {
      toast.error("An error occurred !\n Please try again");
    } finally {
      setLoading(false); // Stop loading
    } 
  };
  
return (
  <div
    style={{
      backgroundColor: "#11235A",
      fontFamily: "Tilt Neon, sans-serif",
      fontWeight: "100",
      fontStyle: "normal",
      height: "100%",
      margin: "0",
      padding:"0"
    }}
  >
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center pb-5">
                      <img src={logo} style={{ width: "100px" }} alt="logo" />
                    </div>

                    {/* <!-- LOGIN FORM HERE --> */}

                    <form onSubmit={handleSubmit} action="" method="post">
                      <p>Please login to your account</p>

                      {/* <!-- USERNAME HERE  --> */}

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter your Username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      {/* <!-- PASSWORD HERE --> */}

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder=" Enter your Password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* <!-- SUBMIT BUTTON HERE --> */}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <input
                          type="submit"
                          className="btn hover-effect-button btn-block fa-lg mb-3"
                          value="Login"
                          name=""
                        />
                      </div>
                    </form>
                    {loading && <div className="text-center">Loading...</div>}
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h3
                      className="mb-4 text-black text-center"
                      style={{ fontWeight: "600" }}
                    >
                      STUDENT MENTOR PROGRAM
                    </h3>
                    <h3 className="small mb-0 text-black text-center">
                      Learning. Growing. Becoming.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ToastContainer />
  </div>
);


}

export default Home
