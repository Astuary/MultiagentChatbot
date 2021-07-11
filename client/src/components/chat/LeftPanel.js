import React from "react"
import styled from "styled-components"
import theme from "../../static/theme.js"

const LeftPanelWrapper = styled.div`
  width: 20%;
  float: left;
  height: 70vh;
  border: 3px solid ${theme.color.brink_pink};
`

function LeftPanel(props) {
  return (
    <LeftPanelWrapper>
      <p>This is LeftPanel.</p>
    </LeftPanelWrapper>
  )
}

export default LeftPanel