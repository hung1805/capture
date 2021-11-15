import React, { useEffect, useState } from "react";
import Award from "../components/Award";

import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "./MovieState";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const MovieDetail = () => {
  //State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //React router dom
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [url, movies]);
  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

//Styled Components

const Details = styled(motion.div)`
  color: #fff;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 25vh;
  position: relative;
  h2 {
    position: absolute;
    font-size: 5rem;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
  }
`;
const Awards = styled.div`
  min-height: 50vh;
  margin: 5rem 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
  }
`;
export default MovieDetail;
