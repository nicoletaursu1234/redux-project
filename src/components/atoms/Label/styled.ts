import styled from "styled-components";

import colors from "constants/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

export const Line = styled.div`
  position: relative;
  background-color: ${colors.darkGray};
  height: 2px;
  width: 100%;
`;

export const Ellipse = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${colors.darkGray};
  padding: 3px 20px;
  border-radius: 10px;
  font-size: 13px;
`;
