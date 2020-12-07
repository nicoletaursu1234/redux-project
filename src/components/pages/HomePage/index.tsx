import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { getLoadingState, getSuccessfulState } from "store/selectors/index";
import { AppState } from "store/typesafeConfig";
import actions from "store/actions";
import Label from "components/atoms/Label";
import Navbar from "components/molecules/Navbar";
import LoadingCards from "components/organisms/LoadingCards";
import ErrorContainer from "components/organisms/ErrorContainer";
import Cards from "components/organisms/Cards";
import { IProps } from "./types.d";
import {
  Wrapper,
  CardsContainer,
  SeeMoreContainer,
  SeeMoreText,
} from "./styled";

const HomePage: React.FC<IProps> = ({ isLoading, successful }) => {
  const [limit, setLimit] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPosts(limit));
  }, [limit]);

  return (
    <Wrapper>
      <Navbar />
      {isLoading && (
        <CardsContainer>
          <Label text="Upcoming" />
          <LoadingCards />
          <Label text="History" />
          <LoadingCards />
        </CardsContainer>
      )}
      {successful ? (
        <CardsContainer>
          <Cards />
          <SeeMoreContainer onClick={() => setLimit(limit + 3)}>
            <FontAwesomeIcon icon={faBars} />
            <SeeMoreText>See more</SeeMoreText>
          </SeeMoreContainer>
        </CardsContainer>
      ) : (
        <ErrorContainer />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state: AppState): Object => {
  return {
    isLoading: getLoadingState(state),
    successful: getSuccessfulState(state),
  };
};

export default connect(mapStateToProps)(HomePage);
