import React from 'react';
import "./style/Header.scss";
import { motion } from "framer-motion";
import rBottom from "../../images/searching_man.webp";
import cFrame from "../../images/Artframe2.webp";

const Header = () => {

    return (
        <>
            <header>
                <div className="header__container">
                    <div className="header__inner">
                        <div className="header__inner_rbImg">
                            <img src={rBottom} alt="" />
                        </div>

                        <div className="header__inner_title">
                            <h1>TOYAMA HIDEKI</h1>
                            <small>PORTFOLIO</small>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;