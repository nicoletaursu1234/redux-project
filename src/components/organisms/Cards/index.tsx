import React from "react";
import { connect } from "react-redux";
import { ILaunchData } from "src/store/types";
import { AppState } from "src/store/typesafeConfig";

import { IProps } from "./types.d";
import { getLaunches, getHistory } from "store/selectors";
import { CardsContainer } from "./styles";
import Card from "components/molecules/Card";
import Label from "components/atoms/Label";

const LoadingCards: React.FC<IProps> = ({ launches, history }) => {
  return (
    <CardsContainer>
      <Label text="Upcoming" />
      {launches.map((item, index) => (
        <Card launch={item} type="upcoming" key={index} />
      ))}
      <Label text="History" />
      {history.map((item, index) => (
        <Card launch={item} key={index} />
      ))}
    </CardsContainer>
  );
};

const mapStateToProps = (state: AppState): Object => {
  return {
    launches: getLaunches(state),
    history: getHistory(state),
  };
};

export default connect(mapStateToProps)(LoadingCards);
