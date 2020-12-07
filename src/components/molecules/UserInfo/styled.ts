import styled from "styled-components";

import photo from "assets/img/elon.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 200px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Span = styled.span`
  color: gray;
  font-weight: lighter;
`;

export const PhotoWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${photo});
  background-position: center;
  background-size: 80px 50px;
  margin-left: 10px;
`