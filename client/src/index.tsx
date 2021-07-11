import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header"
import Footer from "./components/Footer"

import Chat from "./components/Chat"
import About from "./components/About"
import Faq from "./components/Faq"

import styled from "styled-components"
import theme from "./static/theme.js"

const HeaderStyle = styled.div`
  background: ${theme.color.independence};
  width: 100%;
  height: 120px;
`

const Wrapper = styled.div`
  background: ${theme.color.middle_blue_green};
  margin: "0px";
`

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Wrapper>
      <HeaderStyle><Header /></HeaderStyle>
        <Chat />
        <About />
        <Faq />
      <Footer />
      </Wrapper>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

