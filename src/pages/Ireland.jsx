import React, { useState } from "react";
import irish_sheep from "../pictures/irish_sheep.jpeg";
import happy_leprechaun from "../pictures/happy_leprechaun.webp"; 
import angry_leprechaun from "../pictures/angry_leprechaun.jpg"; 

function Ireland() {
  const [reactionImage, setReactionImage] = useState(null); // State to hold the image based on button click

  const handleYesClick = () => {
    setReactionImage(happy_leprechaun);
  };

  const handleNoClick = () => {
    setReactionImage(angry_leprechaun);
  };

  return (
    <div className="page">
      <h2>Ireland</h2>
      <img src={irish_sheep} alt="Ireland" className="blog-image" />
      <p>Coming soon to a spring break near you...</p>

      <div className="reaction-section">
        <h3>Are you excited for my trip to Ireland?</h3>
        <div className="buttons">
          <button onClick={handleYesClick} className="yes-button">Yes</button>
          <button onClick={handleNoClick} className="no-button">No</button>
        </div>
        {reactionImage && (
          <img
            src={reactionImage}
            alt="Leprechaun Reaction"
            className="reaction-image"
          />
        )}
      </div>
    </div>
  );
}

export default Ireland;