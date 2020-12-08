import React from "react";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { IProps } from "./types.d";
import { Wrapper, Icon, Link } from "./styled";

const WatchBox: React.FC<IProps> = ({ videoLink }) => {
  return (
    <Wrapper videoLink={videoLink}>
      <Icon icon={faPlayCircle} />
      <Link href={videoLink}>WATCH</Link>
    </Wrapper>
  );
};

export default WatchBox;
