import React from "react";
import MenuBook from "./MenuBook"; // Import the MenuBook component
// import '../styles/Menu.css'; // You can have specific styles for the Menu page

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      {/* Insert the MenuBook here */}
      <MenuBook className="menu-book" />

      {/* Later, you can add the section for daily specials pulled from Instagram */}
      <div className="daily-menu">
        <h2>今日のおすすめ</h2>
        {/* Placeholder for Instagram-powered daily specials */}
        <p>Daily menu content will go here.</p>
      </div>
    </div>
  );
};

export default Menu;
