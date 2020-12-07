import React from "react";

import LoadingCard from "../../molecules/LoadingCard";
import { IProps } from "./types";
import { CardsContainer } from "./styled";

const LoadingCards: React.FC<IProps> = (props) => {
  return (
    <CardsContainer>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </CardsContainer>
  );
};

export default LoadingCards;
