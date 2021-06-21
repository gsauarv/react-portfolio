import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="servicesLanding">
        <div className="container">
          <div className="serviceWrapper">
            <h3>What Can I do ?</h3>
          </div>
          <div className="cardContainers">
            <div className="serviceCard">
              <div className="serviceIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 serviceSvg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="serviceDetails">
                <h2>Web Development</h2>
                <p>
                  Who am I is an eternal question that we are all trying to
                  answer day by day. Personally, I am a student who is
                  constantly learning from my mistakes, success, and any
                  activity that I engage in in my life.{" "}
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 serviceSvg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="serviceDetails">
                <h2>Python Development</h2>
                <p>
                  Who am I is an eternal question that we are all trying to
                  answer day by day. Personally, I am a student who is
                  constantly learning from my mistakes, success, and any
                  activity that I engage in in my life.{" "}
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 serviceSvg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <div className="serviceDetails">
                <h2>Database Management</h2>
                <p>
                  Who am I is an eternal question that we are all trying to
                  answer day by day. Personally, I am a student who is
                  constantly learning from my mistakes, success, and any
                  activity that I engage in in my life.{" "}
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 serviceSvg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <div className="serviceDetails">
                <h2>UI / UX</h2>
                <p>
                  Who am I is an eternal question that we are all trying to
                  answer day by day. Personally, I am a student who is
                  constantly learning from my mistakes, success, and any
                  activity that I engage in in my life.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
