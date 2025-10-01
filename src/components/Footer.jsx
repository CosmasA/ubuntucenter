function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer position-relative light-background" style={{ paddingTop: "2rem" }}>
      <div className="container text-center mt-4" style={{ fontSize: "14px", color: "#ccc" }}>
        <p>&copy; {year} Ubuntu Centre for AI Africa — All Rights Reserved.</p>
        <p>
          <a href="/terms" style={{ color: "#ccc", textDecoration: "underline" }}>
            Terms & Conditions Apply
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
