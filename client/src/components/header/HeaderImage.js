import React from "react"
import theme from '../../static/theme.js';
import styled from 'styled-components';
import logo from './../../images/icon.png';

const ImageWrapper = styled.div`
  width: 80px;
  margin-left: 50px;
  margin-top: 20px;
  backgroundColor: ${theme.color.cornsilk};
  display: inline-block;
  float: left;
`
//border: 4px solid ${theme.color.cornsilk};

const HeaderImage = (props) => (

    <ImageWrapper >
      <img src={logo} style={{width: "80px"}}/>
    </ImageWrapper>

);

export default HeaderImage