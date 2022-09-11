import React from 'react';
import "./style/Profile.scss";
import { profile } from "../../utils/Dates.js";

import { IconContext } from "react-icons";
import { GrTwitter } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";

const Profile = () => {

  const url = profile.URL;

  return (
    <section>
      <div className="profile__container">

        {/* この中に記述していく */}
        <div className="profile__inner">

          <div className="profile__inner_group">
            <div className='profile__inner_image'>
              {/* 後日画像を組み込む */}
            </div>

            {/* <div className='profile__inner_social'>
              <IconContext.Provider value={{ size: "40", className: "social_icons" }}>
                <a href={url.twitter} target="_blank"><GrTwitter /></a>
                <a href={url.github} target="_blank"><VscGithub /></a>
                <a href={url.instagram} target="_blank"><BsInstagram /></a>
              </IconContext.Provider>
            </div> */}

            <div className='profile__inner_name'>
              <p>{profile.name} <br />
                {`${profile.birth}(${profile.age}歳)`}<br />
                {profile.from}</p>
            </div>
          </div>

          <div className='profile__inner_hobby'>
            <h3>趣味</h3>
            <ul>
              {profile.hobby.map((item , i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Profile;