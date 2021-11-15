import React from "react";
import Wave from "./Wave";

import { About, Image, Description, Hide } from "../pages/style";
import home1 from "../assets/img/home1.png";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../pages/animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that yoy have. We have
          professionals with amazing skills to help you archive them.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="A man with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
