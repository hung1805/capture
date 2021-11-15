import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
      *, *::after, *::before{ 
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }
      html {
            @media (min-width: 1025px) {
                  font-size: 62.5%;
            }
            @media (max-width: 1024px) {
                  font-size: 50%;
            }
            /* font-size: 62.5%; */
      }
      body {
            list-style: none;
            font-weight: 400;
            font-family: "Poppins", sans-serif;
            background: #1b1b1b;
            overflow-x: hidden;
      }
      button {
            cursor: pointer;
            font-weight: 600;
            font-size:2.2rem;
            color: #ffffff;
            padding: 1rem 2rem;
            margin-top: 3rem;
            border: 3px solid #23d997;
            outline: none;
            background: transparent;
            transition: all .5s ease;
            &:hover {
                  background-color: #23d997;
                  color: white;
            }
      }
      a {
            text-decoration: none;
            font-size: 1.8rem;
            color: #ffffff;
      }
      span {
            font-weight: bold;
            color: #23d997;
      }
      h2 {
            font-weight: lighter;
            font-size: 6rem;

      }
      h3 {
            font-size: 1.8rem;
            color: #ffffff;
      }
      h4 {
            font-weight: 500;
            font-size: 2.5rem;
      }
      p {
            color: #ffffff;
            font-size: 2rem;
            line-height: 2;
      }
      ul {
            list-style: none;
      }
      img {
            object-fit:cover
      }
`;

export default GlobalStyle;
