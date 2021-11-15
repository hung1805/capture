import React from "react";

import styled from "styled-components";

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  .line {
    width: 40%;
    height: 5px;
    background: #23d997;
    margin: 1rem 0;
  }
`;
export default Award;
