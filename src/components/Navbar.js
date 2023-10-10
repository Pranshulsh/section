import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navStyle">
        <div className="brandStyle">Chaperone</div>

        <div className="profileStyle">
          <ul className="navitems"></ul>
          <li>Home</li>
          <li>Plant & Pots</li>
          <li>Tools</li>
          <li>Our Services</li>
          <li>Blog</li>
          <li>Our Story</li>
          <li>FAQs</li>
        </div>
        <div className="profile">My Profile</div>
        <div className="cartStyle">My Cart()</div>
      </nav>
    </div>
  );
};

export default Navbar;
