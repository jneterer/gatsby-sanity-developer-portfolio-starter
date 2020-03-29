import { Link } from "gatsby";
import React, { useState } from "react";
import IconMenu from "../icons/icon-menu";
import "./header.scss";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={'header-container' + (expanded ? ' expanded' : '')}>
      <div className="left-menu-container">
        <Link to="/" className="me-link">Your Name</Link>
        <button className={'nav-menu-button' + (expanded ? ' expanded' : '')} onClick={() => setExpanded(!expanded)}>
          <IconMenu />
        </button>
      </div>
      <div className="right-menu-container">
        <Link className="nav-button" to="/#about" onClick={() => setExpanded(false)} >About</Link>
        <Link className="nav-button" to="/#projects" onClick={() => setExpanded(false)} >Projects</Link>
      </div>
    </header>
  );
}

export default Header