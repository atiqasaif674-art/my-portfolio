function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>
      <div className="about-content">
        <div className="about-card">
          <div className="about-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>
            I enjoy turning ideas into attractive and interactive
            web experiences.
          </p>
        </div>
        <div className="about-text">
          <h3>I'm a passionate Frontend Developer.</h3>
          <p>
            I have been learning frontend development and building
            projects using HTML, CSS, JavaScript and React.
            My goal is to create responsive websites with clean
            code and a great user experience.
          </p>
          <p>
            I have worked on projects such as an e-commerce app,
            recipe app, quiz app, notes app, music player and more.
            I'm continuously improving my skills and preparing
            for frontend developer opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
export default About;