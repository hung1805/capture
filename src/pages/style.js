import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 5rem 10rem;
  color: #ffffff;
  p {
    padding: 2rem 0;
  }
  @media (max-width: 1025px) {
    display: block;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  @media (max-width: 1025px) {
    display: block;
    width: 100%;
    margin-bottom: 3rem;
  }
  /* display: flex;
  flex-direction: column;  */
`;
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  margin-left: 2rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
  @media (max-width: 1025px) {
    margin-left: 0;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
