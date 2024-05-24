/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import logo from "../logo_dark.svg";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import Entry from "./Entry";

function createEntry(person){
    return(
        <Entry
        key={person.id}
        id={person.id}
        name={person.fullName}
        link={person.fullName}
        />
    );
}

function userReview(){

  const [applicants, setApplicants] = useState([]);
  const [error, setError] = useState("");

  // Fetch user names when component mounts
  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user/getAllUsers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}` // Include the token in the request
          }
        });

        const data = await response.json();
        if (response.ok) {
          setApplicants(data.users);
          setError("");
        } else {
          setError(data.message || "Failed to fetch users");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };

    fetchUserNames();
  }, []);

    return(
        <>
        <div className="container css-selector">
  <header className="align-items-center justify-content-center justify-content-center py-3 mb-4 border-bottom">
    <div className="mb-2 mb-md-0 d-flex justify-content-center"> 
      <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <img
          src={logo}
          style={{ height: "60px", padding: "5px" }}
          alt="smp logo"
        />
      </a>
    </div>
  </header>
</div>
        {/* MAIN BODY HERE */}
        {applicants.map(createEntry)}
        <div className="container">
          {error && <p className="text-danger">{error}</p>}
          {applicants.filter(person => person.fullName).map(person => (
            <Entry key={person.id} id={person.id} fullName={person.fullName} />
          ))}
        </div>

      <div className="container css-selector w-100" style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}>
        <footer className="py-2 my-2  ">
          <ul className="nav justify-content-center border-bottom border-black pb-3 mb-3">
            <li className="nav-item">
              <a href="../admin" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">Made with ❤️ SMP Web Team</p>
        </footer>
      </div>
      </>
    )
}

export default userReview