import React from "react";
import "./HomePage.css";

function HomePage() {
  console.log("HomePage component rendered"); // Check if this logs in the console

  return (
    <div className="homepage">
      <div className="animated-background" />
      <div className="overlay">
        <h1 className="port">Welcome to My Portfolio</h1>
        <p className="pick">
          I am an aspiring software and web developer with skills in HTML, CSS,
          JavaScript, WordPress, and React. My goal is to build efficient and
          innovative applications that provide value to users.
        </p>
        <p>Explore my skills and projects below, and feel free to reach out!</p>
      </div>
    </div>
  );
}

export default HomePage;
