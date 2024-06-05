  /* eslint-disable react-hooks/exhaustive-deps */
  /* eslint-disable no-unused-vars */
  /* eslint-disable react-hooks/rules-of-hooks */
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import logo from "./logo_blue.svg";
  import Entry from "./Component/Entry";
  import { useNavigate } from "react-router-dom";
  import { PiHandLight } from "react-icons/pi";
  import Footer from "./Component/Footer";
  import Header from './Component/Header';
  import { FaRoad } from "react-icons/fa";
  import Swal from 'sweetalert2'
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

  function AllUsers() {
    const navigate = useNavigate();
    const [applicants, setApplicants] = useState([]);
    const [reviewedApplicants, setReviewedApplicants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [additionalReview, setAdditionalReview] = useState("");
    const [declaration, setDeclaration] = useState(false);
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
    
      const handleSubmitClick = () => {
        if (!declaration) {
          toast.error("Please give the consent for the declaration", {
            autoClose: 3000,
          });
          return;
        }

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to fill the form again",
          icon: "warning",
          iconColor: "#FFC107",
          showCancelButton: true,
          background: "#142749",
          color: "#FFC107",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Proceed",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const isReviewSubmitted = await handleCommentsSubmit();
            // console.log(isReviewSubmitted);
            if (isReviewSubmitted) {
              const isDeclarationSubmitted = await handleDeclarationSubmit();
              if (isDeclarationSubmitted) {
                Swal.fire({
                  title: "Submitted",
                  text: "Your Peer-Review Form has been Submitted",
                  icon: "success",
                  onClose: () => {
                    localStorage.clear();
                    navigate("/"); // Redirect to login page after toast closes
                  },
                });
              }
            }
          }
        });
      };


    function handleCommentsChange (character, value) {
      if (character === "additionalReview") {
        setAdditionalReview(value);
      }
    }

    const handleCommentsSubmit = async () => {
      const userId = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `https://smp-review-portal.onrender.com/api/user/addAdditionalReview/${userId}`,
          { additionalReviews: additionalReview },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          // toast.success("Additional review added successfully", {
          //   autoClose: 3000,
          // });
          return true;
        } else {
          toast.error(response.data.message || "Failed to add additional review");
          return false;
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        return false;
      }
    };

    const handleDeclarationChange = (e) => {
      setDeclaration(e.target.checked);
    };
    const handleDeclarationSubmit = async () => {
      if (!declaration) {
        toast.error(
          "Please give the consent for the declaration",
          {
            autoClose: 3000,
          }
        );
        return;
      }
      const userId = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `https://smp-review-portal.onrender.com/api/user/declareCompletion/${userId}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // console.log(response.data);
        if (response.data.success) {
          await handleCommentsSubmit();
          toast.success(
            "Peer Reviews successfully submitted.",
            {
              autoClose: 3000,
              onClose: () => {
                localStorage.clear();
                navigate("/");
              },
            }
          );
        } else {
          toast.error(response.data.message || "Failed to submit declaration");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
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
              // console.log(reviewed);
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
                JSON.stringify(reviewed)
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
    }, []);

    return (
      <>
        

        {loading ? (
        
          <div className="loader-recc" role="status">
          <div className="loader__bar-recc"></div>
          <div className="loader__bar-recc"></div>
          <div className="loader__bar-recc"></div>
          <div className="loader__bar-recc"></div>
          <div className="loader__bar-recc"></div>
          <div className="loader__ball-recc"></div>
          </div>
        ) : (
          <div style={{padding:"0" , margin:"0" }}>
          <Header handleLogout={handleLogout} />
            {applicants.map((person) =>
              createEntry(
                person,
                handleClick,
                reviewedApplicants.includes(person.id)
              )
            )}

            
       
        
        
        <ToastContainer />
        <Footer />
          </div>
        )}
        
      </>
    );
  }
  export default AllUsers;
