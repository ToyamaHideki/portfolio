import React, { useEffect, useState } from 'react'
import "./style/Menu.scss";

const Menu = () => {

  const [menuState, setMenuState] = useState(null);

  useEffect(()=>{console.log(menuState)},[])


  return (
    <>

      <button className={`mobile_menu_icon ${menuState ? "open" : "false"}`} 
              onClick={() =>{setMenuState(!menuState); console.log(menuState)}}>
        <span></span>
        <span></span>
        <span></span>
      </button>

{/* 初回ローディング時にはアニメーションを発生させない */}
      <nav className={menuState == null ? "" : menuState ? "open" : "close"}>
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