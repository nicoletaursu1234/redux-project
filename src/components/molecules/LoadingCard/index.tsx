import React from "react";
import styled, { css } from "styled-components";

import colors from "../../../constants/styles/colors";

interface IProps {}

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

const boxStyle = css`
  background-color: ${colors.gray};
  border-radius: 15px;
`;

const Flex = styled.div`
  display: flex;
`;

const Wrapper = styled(Flex)`
  height: 100px;
  width: 100%;
  margin: 10px 0;
  border-radius: 15px;
  box-shadow: 1px 1px 5px ${colors.darkGray};
  overflow: hidden;
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: ${colors.lighterGray};
  div {
    width: 60%;
    height: 60%;
    background-color: ${colors.gray};
    border-radius: 15px;
  }
`;

const InfoContainer = styled(Flex)`
  flex: 10;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 10px 10px;
`;

const MainInfo = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 200px;
  div {
    ${boxStyle};
    height: 20px;
    &:nth-child(1) {
      width: 130px;
    }
    &:nth-child(2) {
      width: 60px;
    }
  }
`;

const SecondaryInfo = styled.div`
  ${boxStyle};
  height: 10px;
  width: 180px;
  margin-top: 10px;
`;

const Description = styled.div`
  margin-top: 10px;
  div {
    ${boxStyle};
    height: 10px;
    &:nth-child(1) {
      width: 400px;
    }
    &:nth-child(2) {
      width: 300px;
      margin-top: 3px;
    }
  }
`;

export default LoadingCard;
