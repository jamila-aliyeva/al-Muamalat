import React from "react";
import "./index.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ProgramsPage = () => {
  return (
    <section className="programs-section">
      <div className="container">
        <h2 className="programs-title">International educational programs</h2>
        <p className="programs-description">
          Al Muamalat Education's international study programs offer an in-depth
          learning experience at leading Islamic financial institutions around
          the world.
        </p>
        <div className="programs-content-wrapper">
          <div className="programs-content">
            <h3>What you’ll learn </h3>
            <ul className="programs-content-left-list">
              <div className="programs-content-items">
                <IoCheckmarkDoneSharp />
                <li>
                  Gain a comprehensive understanding of Islamic finance
                  principles and ethics.
                </li>
              </div>
              <div className="programs-content-items">
                <IoCheckmarkDoneSharp />
                <li>
                  Build a portfolio with 10+ real-world projects in Islamic
                  financial services.
                </li>
              </div>
              <div className="programs-content-items">
                <IoCheckmarkDoneSharp />
                <li>
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </li>
              </div>
              <div className="programs-content-items">
                <IoCheckmarkDoneSharp />
                <li>
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </li>
              </div>
              <div className="programs-content-items">
                <IoCheckmarkDoneSharp />
                <li>
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </li>
              </div>
            </ul>
          </div>
          <div className="programs-content">
            <h3>Why should you study at "AL-MUAMALAT"? </h3>
            <ul className="programs-content-right-list">
              <li>Lifetime access</li>
              <li>Video lessons</li>
              <li>Tests</li>
              <li>Projects</li>
              <li>Downloadable resources</li>
              <li>Access via mobile device</li>
            </ul>
          </div>
        </div>
        <h3 className="programs-course-title">
          Brief information about the course
        </h3>
        <p style={{ textAlign: "center" }}>
          videodarslar va tasks' bo'ladi halii))))))){" "}
        </p>
      </div>
    </section>
  );
};

export default ProgramsPage;
