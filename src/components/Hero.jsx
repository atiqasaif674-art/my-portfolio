function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm <span>Atiqa Saif</span></h1>
        <h2>Frontend Developer</h2>
        <p className="hero-description">
          I build responsive, user-friendly and modern websites
          using HTML, CSS, JavaScript and React.
          I love learning new technologies and creating useful projects.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/atiqasaif674-art" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/atiqa-saif-785109401" target="_blank" rel="noreferrer"> LinkedIn ↗</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-circle">
          <div className="hero-initials">AS</div>
          <span className="floating-badge badge-one">React</span>
          <span className="floating-badge badge-two">JavaScript</span>
          <span className="floating-badge badge-three">CSS</span>
        </div>
      </div>
    </section>
  );
}
export default Hero;