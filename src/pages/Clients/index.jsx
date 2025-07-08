import React from "react";
import "./index.css";
import Client1 from "../../assets/images/client1.svg";
import Client2 from "../../assets/images/client2.svg";
import Client3 from "../../assets/images/client3.svg";
import Client4 from "../../assets/images/client4.svg";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <h2>Our Partners and Clients</h2>
        <marquee behavior="" direction="left">
          <div className="clients_total">
            <img src={Client1} alt="Client" />
            <img src={Client2} alt="Client" />
            <img src={Client3} alt="Client" />
            <img src={Client4} alt="Client" />
            <img src={Client1} alt="Client" />
            <img src={Client2} alt="Client" />
            <img src={Client3} alt="Client" />
            <img src={Client4} alt="Client" />
          </div>
        </marquee>
        <marquee behavior="" direction="right">
          <div className="clients_total">
            <img src={Client1} alt="Client" />
            <img src={Client2} alt="Client" />
            <img src={Client3} alt="Client" />
            <img src={Client4} alt="Client" />
            <img src={Client1} alt="Client" />
            <img src={Client2} alt="Client" />
            <img src={Client3} alt="Client" />
            <img src={Client4} alt="Client" />
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default Clients;
