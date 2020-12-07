import React from "react";

import Logo from "components/atoms/Logo";
import UserInfo from "components/molecules/UserInfo";
import { Container, Wrapper } from "./styled";
import { IProps } from "./types.d";

const Navbar: React.FC<IProps> = () => {
  return (
    <Container>
      <Wrapper>
        <Logo height="40px" width="300px" />
        <UserInfo userName="Elon Musk" />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
