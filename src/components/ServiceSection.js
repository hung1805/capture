import React from "react";

import clock from "../assets/img/clock.svg";
import money from "../assets/img/money.svg";
import teamwork from "../assets/img/teamwork.svg";
import diaphragm from "../assets/img/diaphragm.svg";
import home2 from "../assets/img/home2.png";

import styled from "styled-components";
import { scrollReveal } from "../pages/animation";
import { About, Image, Description } from "../pages/style";
import { useScroll } from "./useScroll";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  return (
    <Service ref={element} variants={scrollReveal} initials="hidden" animate={controls}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <ServiceImage>
        <img src={home2} alt="A black camera" />
      </ServiceImage>
    </Service>
  );
};

//Styled Components
const Service = styled(About)`
  flex-direction: row-reverse;
  h2 {
    margin-bottom: 6rem;
  }
  p {
    width: 70%;
    padding-bottom: 1rem;
  }
`;
const Cards = styled.div`
  flex: 2;
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "card card"
    "card card";
  @media (max-width: 1024px) {
    display: block;
  }
`;
const ServiceImage = styled(Image)`
  flex: 1;
  margin-left: -0.5rem;
  margin-right: 6rem;
`;

const Card = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #23d997;
  }
  display: flex;
  flex-direction: column;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 2rem;
      font-size: 1.8rem;
    }
  }
`;
export default ServiceSection;
