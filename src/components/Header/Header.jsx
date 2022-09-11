import React from 'react';
import "./style/Header.scss";
import { motion } from "framer-motion";
import fixedImg from "../../images/searching_man.webp";

const Header = () => {
    return (
        <>
            <header>
                <div className="header__container">
                    <div className="header__inner">

                        <div className="header__inner_img">
                            <img src={fixedImg} alt="" />
                        </div>

                        <div className="header__inner_title">
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;