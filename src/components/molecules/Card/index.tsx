import React from "react";
import { ILaunchData } from "src/store/types";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

import colors from "../../../constants/styles/colors";

interface IProps {
  type: string;
  launch: ILaunchData;
}

type Status = "SUCCESS" | 'FAILURE' | "UNKNOWN";

const Card: React.FC<IProps> = ({
  type,
  launch: {
    mission_name,
    launch_success,
    flight_number,
    launch_date_utc,
    details,
    links,
  },
}) => {
  const truncatedDetails =
    details?.length > 10 ? details.substring(0, 160) + "..." : null;
  let launchSuccessful: Status = launch_success ? "SUCCESS" : 'FAILURE';
  if (launch_success === null) launchSuccessful = "UNKNOWN";

  return (
    <Wrapper>
      <PhotoContainer>
        {links.mission_patch ? (
          <img src={links.mission_patch} alt="Mission Patch" />
        ) : (
          <FontAwesomeIcon
            icon={faSpaceShuttle}
            size="2x"
            color="#666"
            style={{ transform: "rotate(-45deg)" }}
          />
        )}
      </PhotoContainer>

      <InfoContainer>
        <MainInfo>
          <div>
            <FlightNumber>{`#${flight_number}`}</FlightNumber>
            <p>{mission_name}</p>
            <Success success={launchSuccessful}>
              {type == "upcoming" ? 'UNKNOWN' : launchSuccessful}
            </Success>
          </div>
        </MainInfo>

        <SecondaryInfo>Launch Date: {launch_date_utc}</SecondaryInfo>
        <Description>
          <p>{truncatedDetails}</p>
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
  img {
    width: 60%;
    height: 60%;
  }
`;

const InfoContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
`;

const MainInfo = styled(Flex)`
  justify-content: flex-start;
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

const FlightNumber = styled.p`
  color: ${colors.darkerGray};
  padding-right: 5px;
`;

const Success = styled.p<{ success: Status }>`
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

const SecondaryInfo = styled.p`
  font-size: 12px;
  color: #666;
`;

const Description = styled.div`
  width: 70%;
  p {
    font-size: 12px;
  }
`;

export default Card;
