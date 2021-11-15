import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "./animation";
import styled from "styled-components";
import { Hide } from "./style";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
  return (
    <ContactStyled variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us a Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
      <ScrollToTop />
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #353535;
  background-color: #fff;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 4rem;
  }
`;
const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #353535;
`;

export default ContactUs;
