// Projects.jsx
import React from "react";
import "./Project.css";
import water from "../images/water.jpeg";
import food from "../images/food.jpeg";
import coin from "../images/coin.jpeg";

const projectsData = [
  {
    title: "Project 1",
    description:
      "An innovative web app that generate Water Generation SolutionsAI-Driven Adaptive Automated Control",
    imageUrl: water,
    link: "https://github.com/Adebayo-olaitan789/water",
  },
  {
    title: "Project 2",
    description: "A responsive website built with modern technologies.",
    imageUrl: food,
    link: "https://github.com/Adebayo-olaitan789/food",
  },
  {
    title: "Project 3",
    description: "A unique website for minning coin",
    imageUrl: coin,
    link: "https://github.com/Adebayo-olaitan789/lantop-coin",
  },
  // Add more projects here
];

function Project() {
  return (
    <div className="projects-page" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
