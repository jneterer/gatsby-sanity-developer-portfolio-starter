import { Link } from "gatsby";
import React, { useState } from "react";
import IconMenu from "../icons/icon-menu";
import "./header.scss";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={'header-container' + (expanded ? ' expanded' : '')}>
      <div className="left-menu-container">
        <Link to="/" className="me-link">Jacob Neterer</Link>
        <button className={'nav-menu-button' + (expanded ? ' expanded' : '')} onClick={() => setExpanded(!expanded)}>
          <IconMenu />
        </button>
      </div>
      <div>
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
      </div>
    </header>
  );
}

export default Header