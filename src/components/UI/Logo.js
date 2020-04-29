import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import LogoSvg from '../../svg/logo.svg';
import LogoSvg from '../../svg/NubeseliteLogo1.png';

const LinkWrapper = styled(Link)`
  width: 100%;
  // height: 18rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  text-decoration: none;
  // margin-bottom: 2rem;

`;

const LogoWrapper = styled.img`
  max-width: 80%;
`;

const Logo = ({style}) => {
  return (
    <LinkWrapper to={process.env.PUBLIC_URL + '/'}>
      <LogoWrapper src={LogoSvg} style={style} />
    </LinkWrapper>
  );
};

export default Logo;
