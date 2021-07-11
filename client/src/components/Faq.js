import React from "react"
import theme from "../static/theme.js"
import styled from "styled-components"

const FaqWrapper = styled.div`
  width: 100%;
  height: 80vh;
  
  background: ${theme.color.middle_blue_green};
  font-family: ${theme.font.secondary};
  color: ${theme.color.brink_pink};
`

function Faq(props) {
  return (
    <FaqWrapper id="FAQ">
      <p style={{textAlign: "center",  verticalAlign: "middle", lineHeight: "80vh"}}>This is FAQ.</p>
    </FaqWrapper>
  )
}

export default Faq