/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../logo_dark.svg";
import Entry from "./Components/Entry";
import { useNavigate } from "react-router-dom";
import { PiHandLight } from "react-icons/pi";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Comments from "./Components/Comments"

function createEntry(person, handleClick, isReviewed) {
  return (
    <Entry
      key={person.id}
      id={person.id}
      name={person.fullname}
      link={person.fullname}
      onClick={() => handleClick(person.id)}
      isReviewed={isReviewed}
    />
  );
}

function userReview() {
  const navigate = useNavigate();

  const [applicants, setApplicants] = useState([]);
  const [reviewedApplicants, setReviewedApplicants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (id) => {
    if (reviewedApplicants.includes(id)) {
      toast.error("Review already submitted", {
        autoClose: 3000,
      });
    } else {
      // Navigate to the review submission form
      navigate(`/review/${id}`);
    }
  };
  const handleCommentsChange = (character, value) => {
    console.log(`Data in review.jsx file: ${character}: ${value}`);
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

  // Fetch user recommendations when component mounts
  useEffect(() => {
    const fetchUserRecommendations = async () => {
      setLoading(true); // Start loading
      try {
        // Check if cached data exists in localStorage and is not expired
        const cachedData = localStorage.getItem("recommendations");
        const cachedExpiry = localStorage.getItem("recommendationsExpiry");
        const cachedReviewed = localStorage.getItem("reviewedApplicants");

        if (cachedData && cachedExpiry && new Date(cachedExpiry) > new Date()) {
          setApplicants(JSON.parse(cachedData));
          if (cachedReviewed) {
            setReviewedApplicants(JSON.parse(cachedReviewed));
          }
        } else {
          const token = localStorage.getItem("token");
          const userId = localStorage.getItem("id");

          const response = await axios.get(
            `https://smp-review-portal.onrender.com/api/user/getUser/${userId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data.success) {
            // Extract user IDs from the recommendations
            const userIds = response.data.details.recommendations;

            // Fetch user details (including usernames) based on user IDs
            const userDetails = await Promise.all(
              userIds.map(async (userId) => {
                const userResponse = await axios.get(
                  `https://smp-review-portal.onrender.com/api/user/getUser/${userId}`,
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                );
                return userResponse.data.details;
              })
            );

            // Format user details with fullname property
            const recommendedUsers = userDetails.map((user) => ({
              id: user.id,
              fullname: user.fullname,
            }));
            // console.log(recommendedUsers);

            const reviewed = userDetails
              .filter((user) => user.reviewedApplicants.includes(userId))
              .map((user) => user.id);

            setApplicants(recommendedUsers);
            setReviewedApplicants(reviewed);

            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 10);

            // Store data and expiry time in localStorage
            localStorage.setItem(
              "recommendations",
              JSON.stringify(recommendedUsers)
            );
            localStorage.setItem(
              "recommendationsExpiry",
              expiryDate.toString()
            );
            // Store reviewed applicants data in localStorage
            localStorage.setItem(
              "reviewedApplicants",
              JSON.stringify(reviewedApplicants)
            );
          } else {
            toast.error(
              response.data.message || "Failed to fetch recommendations"
            );
          }
        }
      } catch (err) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserRecommendations();
  }, [reviewedApplicants]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          {applicants.map((person) =>
            createEntry(
              person,
              handleClick,
              reviewedApplicants.includes(person.id)
            )
          )}
          <Comments
            text="Additional Review"
            character="additionalReview"
            innerText="Name of the person: YOUR TEXT/REVIEW HERE"
            bottomText="Please write in the given format"
            onCommentsChange={handleCommentsChange}
          />
        </div>
      )}

      <Footer />

      <ToastContainer />
    </>
  );
}

export default userReview;
