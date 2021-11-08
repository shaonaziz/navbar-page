import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";



const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Pioneer Alpha <i class="fas fa-fist-raised"></i>
        </h1>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times":" fas fa-bars"}></i>
        </div>
       <ul className={click ? "nav-menu active":"nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.url} className={items.cName}>
                  {items.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    
    </>
  );
};

export default Navbar;
