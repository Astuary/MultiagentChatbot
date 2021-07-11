import React from "react"
import styled from "styled-components"
import theme from "../../static/theme.js"
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "@fontsource/biorhyme"
import "@fontsource/open-sans"

const RightPanelWrapper = styled.div`
  width: 79%;
  float: right;
  height: 70vh;
  border-right: 3px solid ${theme.color.brink_pink};
  border-top: 3px solid ${theme.color.brink_pink};
  border-bottom: 3px solid ${theme.color.brink_pink};
`

const ChatWrapper = styled.div`
  header-bg-color: ${theme.color.independence};
`

const ChatBotTheme = {
  background: theme.color.white,
  fontFamily: 'Open Sans',
  headerBgColor: theme.color.independence,
  headerFontColor: theme.color.middle_blue_green,
  headerFontSize: theme.font_size.small,
  botBubbleColor: theme.color.brink_pink,
  botFontColor: theme.color.cornsilk,
  userBubbleColor: theme.color.independence,
  userFontColor: theme.color.cornsilk,
};

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
];

const RightPanel = (props) => (

      <RightPanelWrapper>
      <ThemeProvider theme={ChatBotTheme}>
        <ChatBot steps={steps} style={{width: "100%", headerTitle: `test` ,}}/>
      </ThemeProvider>
    </RightPanelWrapper>

);

export default RightPanel