import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpaceShuttle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

import { IProps } from "./types.d";
import {
  Wrapper,
  PhotoContainer,
  InfoContainer,
  MainInfo,
  FlightNumber,
  Success,
  LinkExternal,
  SecondaryInfo,
  Description,
} from "./styled";
import WatchBox from "components/atoms/WatchBox";
import colors from "constants/styles/colors";

const Card: React.FC<IProps> = ({
  type,
  launch: {
    mission_name,
    launch_success,
    flight_number,
    launch_date_utc,
    details,
    links,
    status,
  },
}) => {
  const truncatedDetails =
    details?.length >= 160 ? details.substring(0, 160) + "..." : details;

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
            <Success success={status}>
              {type == "upcoming" ? "UNKNOWN" : status}
            </Success>
          </div>
          <LinkExternal href={links.article_link}>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              color={colors.darkerGray}
            />
          </LinkExternal>
        </MainInfo>

        <SecondaryInfo>Launch Date: {launch_date_utc}</SecondaryInfo>
        <Description>
          <div>
            <p>{truncatedDetails}</p>
          </div>
          <WatchBox videoLink={links.video_link} />
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};

export default Card;
