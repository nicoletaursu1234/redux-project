import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Logo from "../../atoms/Logo";
import UserInfo from "../../molecules/UserInfo";

interface IProps {}

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

const Container = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: white;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 100px;
  width: 100%;
`;

export default Navbar;
