// App.jsx
import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        <HomePage />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      {/* Add other sections here like "Projects" and "Contact" with their own ids */}
    </div>
  );
}

export default App;
