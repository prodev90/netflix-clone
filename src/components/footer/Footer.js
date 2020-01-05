import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class Footer extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    return (
      <FooterContainer>
        <hr />
        <br />
        <br />
        <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions?<Link to="/"> Call 0800 096 6379</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">Ways to Watch</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
            <li>
              <Link to="/">Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notices</Link>
            </li>
          </ul>
          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp;&nbsp;English&nbsp;&nbsp;
            <Icon icon={arrowSortedDown} />
          </div>
        </div>
        {/* Toggle Language Content */}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Portuguese</li>
            </ul>
            <ul>
              <li>Spanish</li>
            </ul>
            <ul>
              <li>French</li>
            </ul>
          </div>
        )}
        <br />
        <span
          style={{ marginLeft: "15%", fontSize: "0.9rem", marginTop: "2rem" }}
        >
          Netflix United Kingdom
        </span>
      </FooterContainer>
    );
  }
}

export default Footer;

// Media
const customMedia = generateMedia({
  tablet: "740px"
});

// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    ${customMedia.lessThan("tablet")`
      grid-template-columns: repeat(2, 1fr);
    `}
  }
  ul li {
    list-style: none;
    line-height: 2.5;
  }
  a {
    color: #999;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }
  // Toggle Language Content
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
  }
  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
