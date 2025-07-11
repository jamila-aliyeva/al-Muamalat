import React from "react";
import "./index.css";
import { MdOutlineStarRate } from "react-icons/md";
import Img1 from "../../assets/images/home-img-1.svg";
import Img2 from "../../assets/images/home-img-2.svg";
import Img3 from "../../assets/images/home-img-3.svg";
import Img from "../../assets/images/home-img.png";
import Date from "../../assets/images/date.png";

const HeroPage = () => {
  return (
    <section className="hero_page">
      <div className="container">
        <div className="hero__total">
          <div className="hero_aside">
            <p>Seeking Knowledge is an Obligation in Islam</p>
            <h1>
              Enhance Your Understanding of Islamic Ethics with Al-Muamalat
            </h1>
            <div className="buttons">
              <button className="hero_btn">Students’ opnion</button>
              <div className="total_rates">
                <div className="images">
                  <img src={Img1} alt="" />
                  <img src={Img2} alt="" />
                  <img src={Img3} alt="" />
                </div>
                <div className="rates">
                  <span>
                    <MdOutlineStarRate />
                  </span>
                  <span>
                    <MdOutlineStarRate />
                  </span>
                  <span>
                    <MdOutlineStarRate />
                  </span>
                  <span>
                    <MdOutlineStarRate />
                  </span>
                  <h5>( 10k+ Reviews)</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_bside">
            <div className="bside_top_flex">
              <img src={Date} alt="" />
              <div className="bside_top_flex_text">
                <h3>250k</h3>
                <p>Assisted Student</p>
              </div>
            </div>
            <img className="base_img" src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
