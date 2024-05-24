import React from "react";
import "../style.css"
import logo from "../logo_dark.svg";
function adminHome(){
return(
    <div style={{backgroundColor: "#11235A" , fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}>
<section className="h-100 gradient-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center pb-5">
                  <img src={logo}
                    style={{width: "100px"}} alt="logo" />
                </div>

                {/* <!-- LOGIN FORM HERE --> */}

                <form action="./Login.php" method="post">
                  <p>Admin Portal Login</p>

                   {/* <!-- USERNAME HERE  --> */}

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example11">Username</label>
                    <input type="email" id="form2Example11" className="form-control" placeholder="Enter your Username" name="username" />
                  </div>

                  {/* <!-- PASSWORD HERE --> */}

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" placeholder=" Enter your Password" name="password"/>
                  </div>

                  {/* <!-- SUBMIT BUTTON HERE --> */}

                  <div className="text-center pt-1 mb-5 pb-1">
                    <input type="submit" className="btn btn-primary btn-block fa-lg mb-3" value="Login" name="" />
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h3 className="mb-4 text-black text-center" style={{fontWeight: "600"}}>STUDENT MENTOR PROGRAM</h3>
                <h3 className="small mb-0 text-black text-center">Learning. Growing. Becoming.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
);


}

export default adminHome