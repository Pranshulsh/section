import React from "react";
import "./Sidebar.css";

const Sidebar = ({ items, onItemClick }) => {
  return (
    <div className="sidebar">
      <h2>My Account</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
