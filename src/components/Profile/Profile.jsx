import React from 'react';
import "./style/Profile.scss";
import { profile } from "../../utils/Dates.js";



const Profile = () => {

  

  return (
    <section>
      <div className="profile__container">

        {/* この中に記述していく */}
        <div className="profile__inner">

          <div className="profile__inner_group">
            <div className='profile__inner_image'>
              {/* 後日画像を組み込む */}
            </div>

            <div className='profile__inner_name'>
              <p>{profile.name} </p>
               <p> {`${profile.birth}(${profile.age}歳)`}</p>
                <p>{profile.from}</p>
            </div>
          </div>

          <div className="profile__inner_quallity">
            <h3>保有資格</h3>
            <ul>
              {profile.quality.map((item,i) => (
                <li key={i}>{item}</li>
              ))}

            </ul>
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