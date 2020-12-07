import React from "react";
import styled from "styled-components";

import ErrorIcon from "../../atoms/ErrorIcon";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <ErrorIcon width="350" height="200" />
      <Text> Ooops! Something went wrong. Please try again later.</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  margin: 40px 200px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`;
export default HomePage;
