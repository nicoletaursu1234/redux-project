import React from "react";

import { IProps } from "./types";
import {
  Wrapper,
  PhotoContainer,
  InfoContainer,
  MainInfo,
  SecondaryInfo,
  Description,
} from "./styled";

const LoadingCard: React.FC<IProps> = () => {
  return (
    <Wrapper>
      <PhotoContainer>
        <div></div>
      </PhotoContainer>

      <InfoContainer>
        <MainInfo>
          <div></div>
          <div></div>
        </MainInfo>

        <SecondaryInfo></SecondaryInfo>
        <Description>
          <div></div>
          <div></div>
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};

export default LoadingCard;
