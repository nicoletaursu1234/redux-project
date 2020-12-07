import React from "react";

import { IProps } from "./types";
import { Container, Text, Span, PhotoWrapper } from "./styled";

const UserInfo: React.FC<IProps> = ({ userName }) => {
  return (
    <Container>
      <Text>
        <Span>Created by: </Span> {userName}
      </Text>
      <PhotoWrapper></PhotoWrapper>
    </Container>
  );
};

export default UserInfo;
