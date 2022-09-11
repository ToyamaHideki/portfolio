import React, { useState } from 'react'
import "./style/Menu.scss";

const Menu = () => {

  const [menuState, setMenuState] = useState(false);


  return (
    <>

    <button className={`mobile_menu_icon ${menuState ? "open":"false"}`} onClick={() => {setMenuState(!menuState); console.log(menuState)}}>
      <span></span>
      <span></span>
      <span></span>
    </button>

      <nav className={menuState ? "open" : "close"}>
        <ul>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </nav>

    </>
  )
}

export default Menu;