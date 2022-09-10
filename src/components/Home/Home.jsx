import React from 'react'
import Career from '../Career/Career'
import Header from '../Header/Header'
import Learning from '../Learning/Learning'
import Profile from '../Profile/Profile'

const Home = () => {
  return (
   <>
        <Header />
        <Profile/>
        <Career/>
        <Learning/>
   </>
  )
}

export default Home