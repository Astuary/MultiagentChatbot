import React from "react"
import styled from "styled-components"
import theme from "../static/theme"

const FooterWrapper = styled.div`
  width: 100%;
  background: ${theme.color.independence};
  height: 120px;
  color: ${theme.color.cornsilk};
  font-size: 14px;
  font-family: ${theme.font.secondary};
`

function Footer(props) {
  return (
    <FooterWrapper>
      <p style={{marginRight: "10%", float: "right", verticalAlign: "middle", lineHeight: "120px"}}> - Created by Kunjal Panchal &copy; 2021</p>
    </FooterWrapper>
  )
}

export default Footer