import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ed145b;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2026 Ninjago Company. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;