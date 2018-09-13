import styled from 'styled-components';
import { font } from './base';
import { brand } from './colors';

export const ProjectHeaderToolbar = styled.div`
  border-bottom: 5px solid #f3b215;
  padding: 0px 20px;
  display: -webkit-box;
  box-shadow: inset 0 2px 3px #3765d8;
  background: #4275fa;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items:center;
  
  span {
    color: #fff;
    font-family: ${font.heading};
    font-weight: 600;
  }
  
  button {
    border: 0 !important;
    padding: 15px 10px;
    background: transparent;
    color: #fff;
    outline: 0;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;
`;
