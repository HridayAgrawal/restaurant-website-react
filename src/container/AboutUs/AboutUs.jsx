import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letter g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <div className="headtext__cormorant">About Us</div>
        <img src={images.spoon} alt="abput_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <div className="headtext__cormorant">Our History</div>
        <img src={images.spoon} alt="abput_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
