import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/menu">メニュー</Link>
        </li>
        <li>
          <Link to="/reservation">予約</Link>
        </li>
        <li>
          <Link to="/access">アクセス</Link>
        </li>
        <li>
          <Link to="/gallery">ギャラリー</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
