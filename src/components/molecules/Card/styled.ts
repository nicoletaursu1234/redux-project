import styled, { css } from "styled-components";
import { Status } from './types';

import colors from "constants/styles/colors";

export const boxStyle = css`
  background-color: ${colors.gray};
  border-radius: 15px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Wrapper = styled(Flex)`
  height: 100px;
  width: 100%;
  margin: 10px 0;
  border-radius: 15px;
  box-shadow: 1px 1px 5px ${colors.darkGray};
  overflow: hidden;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: ${colors.lighterGray};
  img {
    width: 60%;
    height: 60%;
  }
`;

export const InfoContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  padding: 10px 15px;
`;

export const MainInfo = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
  p {
    &:not(:last-child) {
      font-weight: 600;
    }
  }
`;

export const FlightNumber = styled.p`
  color: ${colors.darkerGray};
  padding-right: 5px;
`;

export const Success = styled.p<{ success: Status }>`
  ${boxStyle};
  ${(props) => {
    switch (props.success) {
      case "FAILURE":
        return css`
          background-color: #ffcdd2;
          color: #ef5350;
        `;
      case "SUCCESS":
        return css`
          background-color: #b2dfdb;
          color: #26a69a;
        `;
      default:
        return css`
          background-color: #b3e5fc;
          color: #42a5f5;
        `;
    }
  }}
  font-size: 12px;
  padding: 5px 15px;
  margin-left: 10px;
`;

export const LinkExternal = styled.a`
  &:hover {
    cursor: pointer;
  }
`
export const SecondaryInfo = styled.p`
  font-size: 12px;
  color: #666;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    &:nth-child(1){
      width: 80%;
    }
  }
  p{
    font-size: 12px;
  }
`;