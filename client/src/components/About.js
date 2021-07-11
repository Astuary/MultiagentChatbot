import React from "react"
import theme from "../static/theme.js"
import styled from "styled-components"

const AboutWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 2%;
  background: ${theme.color.independence};
  font-family: ${theme.font.secondary};
  color: ${theme.color.cornsilk};
  
`

function About(props) {
  return (
    <AboutWrapper id="About">
      <p style={{textAlign: "center",  verticalAlign: "middle", lineHeight: "80vh"}}>This is an ABOUT section. Talk about our project here.</p>
    </AboutWrapper>
  )
}

export default About