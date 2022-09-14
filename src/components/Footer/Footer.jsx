import React from 'react';
import "./style/Footer.scss";
import item1 from "../../images/fotteritem1.webp";
import item2 from "../../images/footeritem2.webp";


import { IconContext } from "react-icons";
import { GrTwitter } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

import { link } from "../../utils/Dates.js";

const Footer = () => {



  return (
    <footer>
      <div className='footer__container'>
        
        <div className="footer__inner">
          <IconContext.Provider value={{className: "footer__inner_icons" }}>
            <a href={link.twitter} target="_blank"><GrTwitter />twitter</a>
            <a href={link.github} target="_blank"><VscGithub />Github</a>
            <a href={link.instagram} target="_blank"><BsInstagram />Instagram</a>
            <a href={link.youtube} target="_blank"><AiFillYoutube />YouTube</a>
          </IconContext.Provider>

          <div className="footer__inner_img">
            <img className="item1" src={item1} alt="" />
            <img className="item2" src={item2} alt="" />
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;