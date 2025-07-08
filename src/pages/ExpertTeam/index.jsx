import React from "react";
import "./index.css";
import Expert from "../../assets/images/expert.svg";
import { LiaTelegram } from "react-icons/lia";
import { SiInstagram } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const ExpertTeam = () => {
  return (
    <section className="expert_team">
      <div className="container">
        <h2>Our Expert Team </h2>
        <p>
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>

        <div className="experts_card">
          <img src={Expert} alt="" />
          <div className="experts__bside">
            <h3>Dr. Mezbah Uddin Ahmed</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="experts_social">
              <a href="">
                <LiaTelegram
                  size={20}
                  style={{ color: "rgba(20, 27, 52, 1)" }}
                />
              </a>
              <a href="#">
                {" "}
                <SiInstagram
                  size={20}
                  style={{ color: "rgba(20, 27, 52, 1)" }}
                />
              </a>
              <a href="">
                <SlSocialFacebook
                  size={20}
                  style={{ color: "rgba(20, 27, 52, 1)" }}
                />
              </a>
              <a href="instagram.com">
                {" "}
                <SlSocialTwitter
                  size={20}
                  style={{ color: "rgba(20, 27, 52, 1)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
