function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>Contact <span>Me</span></h2>
        <p className="section-description">
          Have an opportunity or project in mind? Feel free to connect.
        </p>
      </div>
      <div className="contact-card">
        <div className="contact-item">
          <span>📧</span>
          <div>
            <h3>Email</h3>
            <p>Add your professional email below.</p>
          </div>
        </div>
        <div className="contact-item">
          <span>💼</span>
          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally.</p>
          </div>
        </div>
        <div className="contact-item">
          <span>💻</span>
          <div>
            <h3>GitHub</h3>
            <p>Explore my code and projects.</p>
          </div>
        </div>
        <div className="contact-buttons">
          <a href="mailto:atiqasaif674@gmail.com" className="btn btn-primary">Send Me an Email</a>
          <a href="https://github.com/atiqasaif674-art" target="_blank" rel="noreferrer" className="btn btn-outline">Visit GitHub</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;