import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  getLoadingState,
  getSuccessfulState,
} from "../../../store/selectors/index";
import actions from "../../../store/actions";
import Label from "../../atoms/Label";
import Navbar from "../../molecules/Navbar";
import LoadingCards from "../../organisms/LoadingCards";
import ErrorContainer from "../../organisms/ErrorContainer";
import { AppState } from "store/typesafeConfig";
import Cards from "components/organisms/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import colors from "constants/styles/colors";

interface IProps {
  isLoading?: string;
  successful?: string;
}

const HomePage: React.FC<IProps> = ({ isLoading, successful }) => {
  const [limit, setLimit] = useState(0);
  const dispatch = useDispatch();
  console.log('limit', limit);
  useEffect(() => {
    dispatch(actions.fetchPosts(limit));
  }, [limit]);
  console.log(isLoading, successful);

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
          <Cards/>
          <SeeMoreContainer onClick={() => setLimit(limit+3)}>
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

const Wrapper = styled.div`
  height: calc(100vh - 70px);
`;
const CardsContainer = styled.div`
  margin: 0 25%;
  padding: 30px 0;
`;
const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${colors.dark};
  &:hover{
    cursor: pointer;
  }
`
const SeeMoreText = styled.p`
  margin: 0 10px;
`

const mapStateToProps = (state: AppState): Object => {
  return {
    isLoading: getLoadingState(state),
    successful: getSuccessfulState(state),
  };
};

export default connect(mapStateToProps)(HomePage);
