import React from "react"
import styled from "styled-components";
import theme from "../../static/theme.js";

const NavLinkWrapper = styled.a`
  padding: 20px;
  line-height: 110px;
  font-size: 30px;
  vertical-align: "middle";
  color: ${theme.color.cornsilk};
  font-family: ${theme.font.primary};
  float: right;
  text-decoration: none;
`;

function NavLink(props) {
  return (
    <NavLinkWrapper href={`/#${props.name}`}>{props.name} </NavLinkWrapper>
  )
}

export default NavLink