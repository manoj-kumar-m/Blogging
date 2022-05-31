import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://picsum.photos/3840" alt="" className="headerImg"/>
    </div>
  );
};

export default Header;
