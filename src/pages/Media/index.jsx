import React, { useRef } from "react";
import "./index.css";
import Slider from "react-slick";
import { Button } from "antd";
import {
  LeftOutlined,
  PlayCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Media1 from "../../assets/images/media1.png";
import Media2 from "../../assets/images/media2.png";
import Media3 from "../../assets/images/media3.png";

const cards = [
  { img: Media1, text: "Why Islamic finance?" },
  { img: Media2, text: "What makes Islamic finance unique?" },
  { img: Media3, text: `How is risk   managed in Islamic finance?` },
  { img: Media1, text: "How does it work in real life?" },
  { img: Media2, text: "What makes Islamic finance unique?" },
  { img: Media3, text: `How is risk   managed in Islamic finance?` },
];

const Media = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="media">
      <div className="container">
        <h2>Our Media</h2>
        <p className="media_text">
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginBottom: "10px",
              marginTop: "80px",
            }}
          >
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => sliderRef.current.slickPrev()}
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>

          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="finance-card">
                <img src={card.img} alt={card.text} className="finance-image" />
                <div className="finance-content">
                  <p className="finance-text">{card.text}</p>
                  <Button
                    shape="circle"
                    icon={<PlayCircleOutlined />}
                    size="large"
                    className="play-button"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Media;
