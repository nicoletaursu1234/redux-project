import styled from 'styled-components';

import colors from 'constants/styles/colors';

export const Wrapper = styled.div`
  height: calc(100vh - 70px);
`;

export const CardsContainer = styled.div`
  margin: 0 25%;
  padding: 30px 0;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${colors.dark};
  &:hover {
    cursor: pointer;
  }
`;

export const SeeMoreText = styled.p`
  margin: 0 10px;
`;
