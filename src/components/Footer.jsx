function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">Atiqa<span>.</span></a>
      <p>Designed and built with React. © {new Date().getFullYear()} Atiqa Saif.</p>
      <a href="#home" className="back-to-top">Back to top ↑</a>
    </footer>
  );
}
export default Footer;