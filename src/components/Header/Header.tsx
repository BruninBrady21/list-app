import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  background-color: #ed145b;
  color: #fff;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Task Manager</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;