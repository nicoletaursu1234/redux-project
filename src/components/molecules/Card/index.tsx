import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

import { IProps, Status } from "./types.d";
import {
  Wrapper,
  PhotoContainer,
  InfoContainer,
  MainInfo,
  FlightNumber,
  Success,
  SecondaryInfo,
  Description,
} from "./styled";

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
    details?.length >= 160 ? details.substring(0, 160) + "..." : details;
  let launchSuccessful: Status = launch_success ? "SUCCESS" : "FAILURE";

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
              {type == "upcoming" ? "UNKNOWN" : launchSuccessful}
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

export default Card;
