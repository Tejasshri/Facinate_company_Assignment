import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tejas</h1>
      <div className="nav-link-container">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contactUs">Contacts</a>
      </div>
    </nav>
  );
}
