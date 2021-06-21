import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "../services/Services";
import Footer from "../footer/Footer";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import { IconButton } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="landingContainer">
          <div className="landingDetails">
            <h3>Are You Looking For the Perfect Web Developer Or Designer ?</h3>
            <p>
              I'm a passionate full stack web developer and a student of
              technology. Developing, desigining, prototyping and playing with
              the blank canvas makes me happy & creative.
            </p>
            <p>Visit my socials to learn more about me.</p>
            <a href="https://www.instagram.com/gh_saurav/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/gsaurav2000/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UClTCDuid2XiJukenc1NRSpQ"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/gsauarv" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <br></br>
            <Link to="/projects">
              <button>
                {" "}
                <i class="fas fa-project-diagram"></i> See my works
              </button>
            </Link>

            <Link to="/projects">
              <button>
                {" "}
                <i class="fas fa-arrow-down"></i> Download CV
              </button>
            </Link>
          </div>

          <div className="landingProfile">
            <div className="imageContainer">
              {/* <img src={profilePic} alt="profilePic" /> */}
            </div>
          </div>
        </div>
      </div>

      <About />

      {/* Services Components
       */}

      <Services />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
