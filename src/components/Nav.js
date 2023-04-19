import React from "react";
import { FaBars } from "react-icons/fa";


const Nav = () => {
  const [state, setState] = React.useState(true);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo"></div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li onClick={() => setState(!state)}>
                <a href="#Banner">Home</a>
              </li>

              <li onClick={() => setState(!state)}>
                <a href="#About">About</a>
              </li >
              <li onClick={() => setState(!state)}>
                <a href="#Skills">Skills</a>
              </li>
              <li onClick={() => setState(!state)}>
                <a href="#Projects">Projects</a>
              </li>

              <li onClick={() => setState(!state)}>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaBars className="fa" />
      </div>
    </nav>
  );
};

export default Nav;