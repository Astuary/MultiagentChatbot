import React from "react"
import styled from "styled-components"
import theme from "../static/theme.js";
import LeftPanel from "../components/chat/LeftPanel.js"
import RightPanel from "../components/chat/RightPanel.js"

const ChatWrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
  height: 70vh;
  background: ${theme.color.cornsilk};
`

function Chat(props) {
  return (
    <ChatWrapper>
      <LeftPanel/>
      <RightPanel/>
    </ChatWrapper>
  )
}

export default Chat