const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "Responsive Design", icon: "📱" },
  { name: "REST APIs", icon: "🔗" },
];
function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>
        <p className="section-description">
          Technologies and tools I use to build web applications.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;