import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Logo from "../images/Logoss.svg";
const Nav = (e) => {
  const [isActive, setActive] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <div>
      <animated.div className="navContainer" style={fade}>
        <NavLink to="/">
          <div className="logoContainer">
            <img className="logo" src={Logo} alt="logo" />
          </div>
        </NavLink>
        <div className="navWrapper">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/screencasts">Screencasts</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};

export default Nav;
