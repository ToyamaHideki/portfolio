import React, { useEffect, useState } from 'react'
import "./style/Menu.scss";

const Menu = () => {

  const [menuState, setMenuState] = useState(null);

  useEffect(()=>{console.log(menuState)},[])

  const closeWithClickOutSideMethod = (e, setter) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if (e.target === e.currentTarget) {
      //メニューの外側をクリックしたときだけメニューを閉じる
      console.log("メニューの外側をクリックした");
      setter(false);
    } else {
      console.log("メニューの内側をクリックした");
    }
  };


  return (
    
    <>

      <button className={`mobile_menu_icon ${menuState ? "open" : "false"}`} 
              onClick={() =>{setMenuState(!menuState); console.log(menuState)}}>


        <span></span>
        <span></span>
        <span></span>

      </button>

{/* 初回ローディング時にはアニメーションを発生させない */}
      <nav  className={menuState == null ? "" : menuState ? "open" : "close"}
             onClick={(e) => {closeWithClickOutSideMethod(e, setMenuState);
            }}>
        <ul>
          <li><a href="https://www.google.com">GOOGLE</a></li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </nav>

    </>
  )
}

export default Menu;