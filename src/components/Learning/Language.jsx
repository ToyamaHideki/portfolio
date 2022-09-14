import React from 'react';
import "./style/Language.scss";
import js from "../../images/langImg/js.png";
import html from "../../images/langImg/html.png";
import css from  "../../images/langImg/css.png";


const Language = () => {
  const imgPath = "../../images/langImg/";
  return (
    <section>
    <div className='language__container'>
      <div className="language__inner">

        <div className="language__inner_card">
          <div className="language__inner_image">
            {/* <img src={html} alt="" /> */}
          </div>
          <div className="language__text">
          <p>HTML</p>
          </div>
        </div>

        <div className="language__inner_card">
          <div className="language__inner_image">
            <img src={css} alt="" />
          </div>
          <div className="language__text">
          <p>CSS</p>
          </div>
        </div>

        <div className="language__inner_card">
          <div className="language__inner_image">
            <img src={js} alt="" />
          </div>
          <div className="language__text">
          <p>JS</p>
          </div>
        </div>

        <div className="language__inner_card">
          <div className="language__inner_image">
            <img src={css} alt="" />
          </div>
          <div className="language__text">
          <p>JS</p>
          </div>
        </div>


      </div>
    </div>
    </section>
  )
}

export default Language;