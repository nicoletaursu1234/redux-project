import React from "react";

import { IProps } from "./types.d";
import { Wrapper, Line, Ellipse } from './styled';

const Label: React.FC<IProps> = ({ text }) => {
  return (
    <Wrapper>
      <Line />
      <Ellipse>{text}</Ellipse>
    </Wrapper>
  );
};

export default Label;
