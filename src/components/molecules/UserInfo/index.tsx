import React from "react";
import styled from "styled-components";

import photo from "../../../assets/img/elon.jpg";

interface IProps {
  userName: string,
}

const UserInfo: React.FC<IProps> = ({ userName }) => {
  return (
    <Container>
      <Text><Span>Created by: </Span> {userName}</Text>
      <PhotoWrapper></PhotoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 200px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const Span = styled.span`
  color: gray;
  font-weight: lighter;
`;

const PhotoWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${photo});
  background-position: center;
  background-size: 80px 50px;
  margin-left: 10px;
`

export default UserInfo;
