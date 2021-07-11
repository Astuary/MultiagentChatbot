import React from "react"
import HeaderImage from "./header/HeaderImage"
import NavBar from "./header/NavBar"
import theme from "../static/theme.js"
import styled from "styled-components"

const HeaderTitle = styled.div`
  font-family: ${theme.font.primary};
  color: ${theme.color.white};
  ${theme.font_size.xlarge};
  margin-left: 2em;
  margin-top: 30px;
  float: left;
`

function Header(props) {
  return (
    <div >
      <div>
        <HeaderImage /> <HeaderTitle>Hydra</HeaderTitle>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  )
}

export default Header