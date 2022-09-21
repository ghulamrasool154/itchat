import "./Header.css";
import logo from "../../assets/images/logo.jpg";
const Header = () => {
  return (
    <header>
      <div className="header--side">
        <div className="header--logo">
          <div className="logo">
            <img src={logo} alt="IT Chat" className="img-fluid" />
          </div>

          <ul className="header--navbar">
            <li>
              <a
                className="nav--text"
                href="home"
                target="_self"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-gauge" />
              </a>
            </li>
            <li>
              <a
                className="nav--text active"
                href="home"
                target="_self"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-message" />
              </a>
            </li>
            <li>
              <a
                className="nav--text"
                href="home"
                target="_self"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-gear" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header--logout">
          <span className="icon">
            <i className="fa-solid fa-arrow-right-from-bracket" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
