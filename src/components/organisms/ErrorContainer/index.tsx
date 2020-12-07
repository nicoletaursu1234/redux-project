import React from "react";

import { IProps } from "./types";
import { Wrapper, Text } from "./styled";
import ErrorIcon from "components/atoms/ErrorIcon";

const HomePage: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <ErrorIcon width="350" height="200" />
      <Text> Ooops! Something went wrong. Please try again later.</Text>
    </Wrapper>
  );
};

export default HomePage;
