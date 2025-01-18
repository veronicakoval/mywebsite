import React from "react";
import veronica from "../pictures/veronica.jpeg";

function AboutMe() {
  return (
    <div className="page" style={{ fontFamily: "'Noto Serif', serif" }}>
      <h2 style={{ marginTop: "20px", textAlign: "center", }}>About Me</h2>
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Hi! My name is Veronica, and I am a first-year at Barnard College. I love science and innovation, 2000s TV shows, and coffee!
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img src={veronica} alt="Veronica" className="blog-image" style={{ width: "300px", borderRadius: "50%" }} />
      </div>
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        I am really excited to explore New York City throughout the next 4 years, and I hope to travel to other countries soon too!
      </p>
    </div>
  );
}

export default AboutMe;
