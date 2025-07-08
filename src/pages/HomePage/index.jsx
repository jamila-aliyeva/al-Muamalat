import React from "react";
import "./index.css";
import Img1 from "../../assets/images/home-img-1.svg";
import Img2 from "../../assets/images/home-img-2.svg";
import Img3 from "../../assets/images/home-img-3.svg";
import Img from "../../assets/images/home-img.png";
import Date from "../../assets/images/date.png";
import Services from "../Services";
import ExpertTeam from "../ExpertTeam";

const HomePage = () => {
  return (
    <>
      <section className="home_page">
        <div className="container">
          <div className="home__total">
            <div className="home_aside">
              <p>Seeking Knowledge is an Obligation in Islam</p>
              <h1>
                Enhance Your Understanding of Islamic Ethics with Al-Muamalat
              </h1>
              <div className="buttons">
                <button className="home_btn">Students’ opnion</button>
                <div className="total_rates">
                  <div className="images">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                  </div>
                  <div className="rates">
                    <span>yulduzchalar</span>
                    <h4>( 10k+ Reviews)</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="home_bside">
              <div className="home_bside_top">
                <div className="bside_top_flex">
                  <img src={Date} alt="" />
                  <div>
                    <h3>250k</h3>
                    <p>Assisted Student</p>
                  </div>
                </div>
              </div>
              <img className="base_img" src={Img} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <ExpertTeam />
    </>
  );
};

export default HomePage;
