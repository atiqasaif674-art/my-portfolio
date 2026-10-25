import { useState } from "react";
const projects = [
  {
    title: "Calculator",
    category: "JavaScript",
    description: "A calculator for performing basic mathematical operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/CodeAlpha_Calculator.git",
    github: "https://github.com/atiqasaif674-art/CodeAlpha_Calculator.git",
    icon: "🧮",
  },
  {
    title: "Image Gallery",
    category: "JavaScript",
    description: "An image gallery with an attractive and interactive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/CodeAlpha_ImageGallery.git",
    github: "https://github.com/atiqasaif674-art/CodeAlpha_ImageGallery.git",
    icon: "🖼️",
  },
  {
    title: "Ice Cream Website",
    category: "JavaScript",
    description: "A colourful ice cream website with an appealing design.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://atiqasaif674-art.github.io/Ice-Creme",
    github: "https://github.com/atiqasaif674-art/Ice-Creme.git",
    icon: "🍦",
  },
  {
    title: "Music Player",
    category: "JavaScript",
    description: "A music player interface for playing and controlling audio.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/CodeAlpha_MusicPlayer.git",
    github: "https://github.com/atiqasaif674-art/CodeAlpha_MusicPlayer.git",
    icon: "🎵",
  },
  {
    title: "Counter App",
    category: "React",
    description: "A React application that updates a counter interactively.",
    tech: ["React", "CSS"],
    demo: "https://github.com/atiqasaif674-art/counter-app.git",
    github: "https://github.com/atiqasaif674-art/counter-app.git",
    icon: "🔢",
  },
  {
    title: "Digital Clock",
    category: "React",
    description: "A digital clock that displays the current time.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/digital-clock-react.git",
    github: "https://github.com/atiqasaif674-art/digital-clock-react.git",
    icon: "⏰",
  },
  {
    title: "Notes App",
    category: "React",
    description: "An application for creating and managing notes.",
    tech: ["React", "CSS"],
    demo: "https://github.com/atiqasaif674-art/Notes-App-React.git",
    github: "https://github.com/atiqasaif674-art/Notes-App-React.git",
    icon: "📝",
  },
  {
    title: "Quiz App",
    category: "React",
    description: "An interactive quiz with questions and score tracking.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/quiz-app.git",
    github: "https://github.com/atiqasaif674-art/quiz-app.git",
    icon: "❓",
  },
  {
    title: "E-Commerce App",
    category: "React",
    description: "An online shopping interface with product cards.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/E-Commerce-App.git",
    github: "https://github.com/atiqasaif674-art/E-Commerce-App.git",
    icon: "🛍️",
  },
  {
    title: "Recipe App",
    category: "React",
    description: "An application for browsing and discovering recipes.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://github.com/atiqasaif674-art/recipe-app.git",
    github: "https://github.com/atiqasaif674-art/recipe-app.git",
    icon: "🍲",
  },
  {
    title: "Todo App",
    category: "React",
    description: "A task management app for organising daily activities.",
    tech: ["React", "CSS"],
    demo: "https://github.com/atiqasaif674-art/Todo-App.git",
    github: "https://github.com/atiqasaif674-art/Todo-App.git",
    icon: "✅",
  },
];
function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "JavaScript", "React"];
  const filteredProjects = activeFilter === "All" ? projects: projects.filter(
          (project) => project.category === activeFilter);
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-subtitle">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p className="section-description">Some projects I have built while learning frontend development.</p>
      </div>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button key={filter} className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <span>{project.icon}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Live Demo ↗</a>
                ) : (
                  <span className="link-placeholder">Add Demo Link</span>
                )}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
                ) : (
                  <span className="link-placeholder">Add GitHub Link</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;