import React from 'react';
import "./style/Home.scss";


import Career from '../Career/Career';
import Header from '../Header/Header';
import Learning from '../Learning/Learning';
import Profile from '../Profile/Profile';
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return (
   <>
         <motion.div
        className="progress-bar"
        style={{ scaleX: scaleX }}
      />
      <Header />
      <Profile/>
        {/* 
        <Career/>
        <Learning/> */}
   </>
  )
}

export default Home