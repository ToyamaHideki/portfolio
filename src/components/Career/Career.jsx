import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import "./style/Career.scss";

const Career = () => {
  return (
    <section>
        <div className="career__container">
          <div className="career__inner">
          <ul>
            <li>2013/4 愛知県立名南工業高等学校　卒業</li>
            <li>2013/4 ~ 2017/10 日鉄住金ハード株式会社に就職　<br/> 4年6カ月勤めた会社を退職</li>
            <li>2017/10 ~ 2021/5 豊田自動織機株式会社に期間従業員として従事 <br/> 派遣労働期間含め3年7カ月勤め退職</li>
            <li>2021/8 ~ 2022/2 プログラミングを学ぶため職業訓練校(WEBアプリ開発コース)に入学
               <br/>基礎的なHTML/CSS/JSを学んだ後、PHP,Javaのサーバーサイド言語を学習 </li>
          </ul>
          </div>
        </div>


    </section>
  )};

  export default Career;