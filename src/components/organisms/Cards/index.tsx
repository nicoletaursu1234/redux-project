import React from "react";
import { connect } from "react-redux";
import { ILaunchData } from "src/store/types";
import { AppState } from "src/store/typesafeConfig";
import styled from "styled-components";

import { getLaunches, getHistory } from "store/selectors";
import Card from "components/molecules/Card";
import Label from "components/atoms/Label";

interface IProps {
  launches?: Array<ILaunchData>;
  history?: Array<ILaunchData>;
}

const LoadingCards: React.FC<IProps> = ({ launches, history }) => {
  return (
    <CardsContainer>
      <Label text="Upcoming" />
      {launches.map((item, index) => (
        <Card launch={item} type="upcoming" key={index}/>
      ))}
      <Label text="History" />
      {history.map((item, index) => (
        <Card launch={item} type="history" key={index}/>
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  margin: 20px 0;
`;

const mapStateToProps = (state: AppState): Object => {
  return {
    launches: getLaunches(state),
    history: getHistory(state),
  };
};

export default connect(mapStateToProps)(LoadingCards);
