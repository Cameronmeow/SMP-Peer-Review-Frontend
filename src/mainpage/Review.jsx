/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import "../App.css";
import Question from "./Components/Question";
import logo from "../logo_dark.svg";
import Comments from "./Components/Comments";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function ReviewForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [approachability, setApproachability] = useState({
    rating: 0,
    description: "",
  });
  const [academicInclination, setAcademicInclination] = useState({
    rating: 0,
    description: "",
  });
  const [workEthics, setWorkEthics] = useState({ rating: 0, description: "" });
  const [substanceAbuse, setSubstanceAbuse] = useState("");
  const [maturity, setMaturity] = useState({ rating: 0, description: "" });
  const [openMindedness, setOpenMindedness] = useState({
    rating: 0,
    description: "",
  });
  const [academicEthics, setAcademicEthics] = useState({
    rating: 0,
    description: "",
  });
  const [goodISMPmentor, setGoodISMPmentor] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const { userId } = useParams();
  const reviewerName = localStorage.getItem("reviewerName"); // Get reviewer's name from localStorage

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://smp-review-portal.onrender.com/api/user/getUser/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.details.fullname);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  });

  const handleRatingChange = (character, data) => {
    // console.log(
    //   `Data in review.jsx file: ${character} ${data.rating} ${data.description}`
    // );
    switch (character) {
      case "approachability":
        setApproachability(data);
        break;
      case "academicInclination":
        setAcademicInclination(data);
        break;
      case "workEthics":
        setWorkEthics(data);
        break;
      case "maturity":
        setMaturity(data);
        break;
      case "openMindedness":
        setOpenMindedness(data);
        break;
      case "academicEthics":
        setAcademicEthics(data);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("reviewerName");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("reviewedApplicants");
    localStorage.removeItem("recommendations");
    localStorage.removeItem("recommendationsExpiry");

    toast.success("Logged out successfully", {
      autoClose: 3000, // Custom duration in milliseconds (3 seconds)
      onClose: () => {
        navigate("/"); // Redirect to login page after toast closes
      },
    });
  };

  const handleCommentsChange = (character, value) => {
    // console.log(`Data in review.jsx file: ${character}: ${value}`);
    switch (character) {
      case "substanceAbuse":
        setSubstanceAbuse(value);
        break;
      case "goodISMPmentor":
        setGoodISMPmentor(value);
        break;
      case "additionalComments":
        setAdditionalComments(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const reviewData = {
        applicantName: `${user}`,
        reviewerName: reviewerName,
        approachability,
        academicInclination,
        workEthics,
        substanceAbuse,
        maturity,
        openMindedness,
        academicEthics,
        goodISMPmentor,
        additionalComments,
      };

      // Check if any required data is missing
      if (
        !approachability ||
        !academicInclination ||
        !workEthics ||
        !substanceAbuse ||
        !maturity ||
        !openMindedness ||
        !academicEthics ||
        !goodISMPmentor ||
        !additionalComments ||
        (approachability.rating < 3 && !approachability.description) ||
        (academicInclination.rating < 3 && !academicInclination.description) ||
        (workEthics.rating < 3 && !workEthics.description) ||
        (maturity.rating < 3 && !maturity.description) ||
        (openMindedness.rating < 3 && !openMindedness.description) ||
        (academicEthics.rating < 3 && !academicEthics.description)
      ) {
        toast.error("Fill all the details", {
          autoClose: 3000,
        });
        return;
      }
      // console.log(reviewData);

      const response = await axios.post(
        `https://smp-review-portal.onrender.com/api/user/createReview/${userId}`,
        reviewData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // console.log(`response: ` + response.data);

      if (response.data.success) {
        // Update the localStorage for alreadyReviewedApplicants
        let alreadyReviewed = localStorage.getItem("reviewedApplicants");

        alreadyReviewed = alreadyReviewed ? JSON.parse(alreadyReviewed) : [];
        alreadyReviewed.push(userId);
        localStorage.setItem(
          "reviewedApplicants",
          JSON.stringify(alreadyReviewed)
        );

        toast.success(response.data.message, {
          autoClose: 3000,
          onClose: () => {
            navigate("/recommendations");
          },
        });
      } else {
        toast.error(response.data.message, {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Review submission unsuccessful");
      console.error("Error submitting the review: ", error);
    }
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      
      <div className="text-center container">
        <h1
          style={{
            fontFamily: "Tilt Neon, sans-serif",
            fontWeight: "100",
            fontStyle: "normal",
          }}
        >
          {/* `Peer Review Form for: ${user}` */}
          {user && <h2>{`Peer Review Form for: ${user}`}</h2>}
        </h1>
        <div className="container h-100 g-0" style={{ background: "#ffffff" }}>
          <div className="row">
            <div className="col-xl-4">
              <Question
                trait="Approachability"
                character="approachability"
                onRatingChange={handleRatingChange}
              />
            </div>
            <div className="col-xl-4">
              <Question
                trait="Academic Inclination"
                character="academicInclination"
                onRatingChange={handleRatingChange}
              />
            </div>
            <div className="col-xl-4">
              <Question
                trait="Work Ethics/Dedication"
                character="workEthics"
                onRatingChange={handleRatingChange}
              />
            </div>
          </div>
          <Comments
            text="Substance Abuse"
            character="substanceAbuse"
            innerText="Write a short answer"
            bottomText="Explain your answer briefly"
            onCommentsChange={handleCommentsChange}
          />
          <div className="row m-0 p-0">
            <div className="col-xl-4">
              <Question
                trait="Maturity"
                character="maturity"
                onRatingChange={handleRatingChange}
              />
            </div>
            <div className="col-xl-4">
              <Question
                trait="Open-Mindedness"
                character="openMindedness"
                onRatingChange={handleRatingChange}
              />
            </div>
            <div className="col-xl-4">
              <Question
                trait="Academic Ethics"
                character="academicEthics"
                onRatingChange={handleRatingChange}
              />
            </div>
          </div>
          <Comments
            text="Do you think he/she will be a good ISMP mentor?"
            character="goodISMPmentor"
            innerText="Write Yes or No or Maybe"
            bottomText="Explain your answer briefly"
            onCommentsChange={handleCommentsChange}
          />
          <Comments
            text="Any other comments"
            character="additionalComments"
            innerText="Write here"
            bottomText="If you have no comments please write NA"
            onCommentsChange={handleCommentsChange}
          />
        </div>
        <button
          id="reviewSubmit"
          className="btn btn-primary hover-effect-button btn-block fa-lg mb-3"
          onClick={handleSubmit}
        >
          Submit Review
        </button>
        <ToastContainer />
      </div>
     
        <Footer />
     
    </>
  );
}

export default ReviewForm;
