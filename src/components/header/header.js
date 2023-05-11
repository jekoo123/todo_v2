import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
function Header() {
  const [pagename, setPagename] = useState("Main Page");
  const location = useLocation();
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPagename("Input Page");
        break;
      case "/search":
        setPagename("Search Page");
        break;
      default:
        setPagename("Input Page");
    }
  }, [location]);

  return (
    <div className="header">
      <div className="name">Todo List</div>
      <div className="pagename">{pagename}</div>
      <div className="nav">
        <Link to="/">Input</Link>
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
}

export default Header;
