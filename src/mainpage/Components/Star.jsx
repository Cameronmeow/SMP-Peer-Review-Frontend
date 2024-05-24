/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import '../../App.css'
import RatingBox from "./RatingBox";

function Star(props) {

  const [rating , setRating] = useState(null);
  const [hover , setHover] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [description, setDescription] = useState("");

  const handleClick = (currentRating) => {
    const newDescription = currentRating > 2 ? '' : description;
    setRating(currentRating);
    setDescription(newDescription);
    const newRatingData = { rating: currentRating, description: newDescription };
    props.onRatingChange(props.character, newRatingData);
    setClicked(true);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    const newRatingData = { rating, description: newDescription };
    props.onRatingChange(props.character, newRatingData);
  };

    return(
    <div>
      {[...Array(5)].map((star,index)=>{

        const currentRating = index + 1;
        return (
            <>
              <label key={index} className="pt-3">
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => handleClick(currentRating)} />
                    <FaStar
                        className='star'
                        size={50}
                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={ () => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            </>
        );
    })}
        
      <p style={{ fontFamily: "Tilt Neon, sans-serif", fontWeight: "100", fontStyle: "normal"}}>Your Rating is {rating}</p>

      {clicked && (rating < 3) &&
        <RatingBox
          text="Reason for Low rating"
          innerText="Briefly explain the reason for low rating"
          value={description}
          onChange={handleDescriptionChange}
          />}
    </div>
)
}

export default Star;

