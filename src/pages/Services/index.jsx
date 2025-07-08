import React from "react";
import "./index.css";
import Card from "../../assets/images/our-service.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services_top">
          <h2>Our services </h2>
          <p>
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>
        </div>
        <div className="service__total">
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
          <div className="service__card">
            <div className="card_top">
              <img src={Card} alt="Rasm bor" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p className="card_text">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service__btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
