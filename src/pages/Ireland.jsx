import React from "react";
import irish_sheep from "../pictures/irish_sheep.jpeg";

function Ireland() {
  return (
    <div className="page">
      <h2>Ireland</h2>
      {/* Use the imported variable directly in the src attribute */}
      <img src={irish_sheep} alt="Ireland" className="blog-image" />
      <p>Coming soon to a spring break near