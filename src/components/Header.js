import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-header">
        <Link className="navbar-brand" to={`/`}>
          Home
        </Link>
      </div>
      <ul className="nav navbar-dark navbar-right">
        <Link className="nav-link" to={`/contact-form/`}>
          Add New
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
