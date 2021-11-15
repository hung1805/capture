import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <Link className="logo" to="/">
        Capture
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

//Styled Component

const StyledNav = styled.nav`
  /* position: fixed; */
  background-color: #000;
  width: 100%;
  height: 10vh;
  max-height: 10vh;
  margin: auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  .logo {
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
  }
  ul {
    display: flex;
    li {
      margin-left: 3rem;
      a {
        position: relative;
        &::after {
          position: absolute;
          bottom: -0.3rem;
          left: 0;
          right: 0;
          margin: auto;
          width: 0%;
          content: ".";
          color: transparent;
          background: #23d997;
          height: 2px;
          transition: all 0.3s;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;

export default Nav;
