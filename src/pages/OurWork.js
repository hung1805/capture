import React from "react";

import athlete from "../assets/img/athlete-small.png";
import theracer from "../assets/img/theracer-small.png";
import goodtimes from "../assets/img/goodtimes-small.png";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hide } from "./style";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "./animation";
import { useScroll, useSrcoll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <motion.img variants={photoAnimation} src={athlete} alt="The athlete" />
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} initials="hidden" animate={controls}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img src={theracer} alt="The racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} initials="hidden" animate={controls2}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="work/goodtime">
          <Hide>
            <motion.img src={goodtimes} alt="Good times" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

//Styled Component
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    margin-top: 2rem;
    font-size: 5rem;
  }
  .line {
    background-color: #23d997;
    height: 0.6rem;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #fffebf;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
