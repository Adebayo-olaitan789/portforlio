// Skills.jsx
import React from "react";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      name: "HTML",
      level: "Advanced",
      description: "Experienced in HTML5 semantics and accessibility.",
    },
    {
      name: "CSS",
      level: "Advanced",
      description:
        "Skilled in CSS3, including Flexbox, Grid, and responsive design.",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      description:
        "Proficient in ES6+, DOM manipulation, and async programming.",
    },
    {
      name: "React",
      level: "Intermediate",
      description:
        "Comfortable with React components, hooks, and state management.",
    },
    {
      name: "Git",
      level: "Intermediate",
      description: "Experienced in version control using Git and GitHub.",
    },
  ];

  return (
    <div className="skills-page">
      <h2>Skills</h2>
      <p>Here are some of the skills I bring to my web development projects:</p>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>Level: {skill.level}</p>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
