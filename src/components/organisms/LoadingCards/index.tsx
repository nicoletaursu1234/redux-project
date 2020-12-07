import React from "react";
import styled from 'styled-components';

import LoadingCard from '../../molecules/LoadingCard';

interface IProps {}

const LoadingCards: React.FC<IProps> = (props) => {
  return (
    <CardsContainer>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  margin: 20px 0;
`
export default LoadingCards;
