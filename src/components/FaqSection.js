import React from "react";
import Toggle from "./Toggle";

import styled from "styled-components";
import { About } from "../pages/style";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../pages/animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} initials="hidden" animate={controls} ref={element}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit
              perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit
              perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit
              perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit
              perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

//Styled Component
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 3rem;
  }
  .faq-line {
    width: 100%;
    height: 0.3rem;
    background-color: #ccc;
    margin: 2rem 0;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
