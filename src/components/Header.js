import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div class="header-top">
          <Logo src={logo} />
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>

        {/*Header Content */}
        <div className="header-content">
          <Title>Unlimited films, TV programmes and more.</Title>
          <SubTitle>Watch anywhere. Cancel at any time.</SubTitle>
          <Button className="main-offer-btn" primary>
            try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Button>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
    left: 20%;
    width: 7rem;
  `}
`;

// Header Container
const HeaderContainer = styled.div`
  .Icon svg {
  vertical-align: bottom !important;
  margin-left: 1rem;
  position: relative;
  ${customMedia.lessThan("smTablet")`
   display: none !important;
  `}
}
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }

  }

  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  //Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
    ${customMedia.lessThan("smTablet")`
    display: grid;
    grid-template-rows: repeat(3, 60px);
    margin-top: 8rem;
    `}
    // Lg Main
    .main-offer-btn {
      ${customMedia.lessThan("lgDesktop")`
      width: 0 33%;
      font-size: 1.3rem;
      
    `}
    
      ${customMedia.lessThan("mdDesktop")`
      margin: 0 33%;
      padding: 12px 15px;
      font-size: 1.4rem;

      `}
    
      ${customMedia.lessThan("tablet")`
       margin: 2% 20% 1% 30%;
       padding: 12px 16px;
       font-size: 1.1rem;
        margin-top: 1rem;
      `}
    }
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 3.7rem;
  font-weight: 600;
  line-height: 1.1em;
  ${customMedia.lessThan("tablet")`
    font-size: 2.0rem;
    
  `}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.575rem;
  line-height: 1.25rem;
  margin: 0 0 1.875rem;
  ${customMedia.lessThan("smTablet")`
   font-size: 1.1rem;
   margin: 15px;
   margin-top: 3rem;
  `}
`;
