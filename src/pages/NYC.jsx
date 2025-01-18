import React from "react";
import sp2_summer from "../pictures/sp2_summer.jpeg";
import brooklyn_bridge from "../pictures/brooklyn_bridge.jpeg";
import little_italy from "../pictures/little_italy.jpeg";
import little_islands from "../pictures/little_islands.jpeg";
import rockefeller from "../pictures/rockefeller.jpeg";


function NYC() {
  return (
    <div className="page">
      <h2>New York City</h2>
      <p>The best part about Barnard is obviously... the city!!</p>

      <div className="section">
        <h3>First, I spent a week with my SP2 cohort exploring the city in July!</h3>
        <img src={sp2_summer} Alt="Summer Camp Group" className="blog-image"
        />
        <p>This was my first big exposure to the city. We went to places like Chelsea Market and the High Line.</p>
      </div>

      <div className="section">
        <h3>The Brooklyn Bridge and the Floating Islands</h3>
        <div className="image-row">
         <img src={brooklyn_bridge} Alt="Brooklyn Bridge" className="blog-image"
          />
          <img src={little_islands} Alt="Floating Islands" className="blog-image"
          />
        </div>
        <p>Here are 2 things we saw (and walked on)</p>
      </div>

      <div className="section">
        <h3>Little Italy!</h3>
        <img src={little_italy} Alt="Little Italy" className="blog-image"
        />
        <p>My friend had a birthday dinner here at Puglia! (They made us dance)</p>
      </div>

      <div className="section">
        <h3>The Rockefeller Tree</h3>
        <img src={rockefeller} Alt="Rockefeller" className="blog-image"
        />
        <p>I didn't like the crowds, but seeing the tree was still magical!</p>
      </div>
    </div>
  );
}

export default NYC;
