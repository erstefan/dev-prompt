import styled from 'styled-components';
import { font } from './base';
import { brand } from './colors';

export const ProjectHeaderToolbar = styled.div`
  padding: 5px 20px;
  display: -webkit-box;
  background: #ffffff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #eee;

  span {
    color: ${brand.primary};
    font-family: ${font.heading};
    font-weight: 600;
  }

  button {
    border: 0 !important;
    padding: 15px 10px;
    background: transparent;
    color: ${brand.primary};
    outline: 0;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;

  input.editing {
    max-width: none !important;
    width: auto !important;
    padding: 1px 12px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    height: 20px;
    color: #fff;
    text-align: center;
  }

  .btn-remove-terminal {
    float: right;
    width: 22px;
    border: 0;
    height: 20px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    background: ${brand.primary};
    color: #fff;
    text-align: left;
    font-size: 9px;
    position: relative;
    bottom: -2px;
    right: 0px;
    outline: 0;
    cursor: pointer;
  }
`;

export const CommandInput = styled.input`
  background: #fff !important;
  border: 3px solid ${brand.primary} !important
  padding: 12px 20px 12px 40px !important;
  color: ${brand.primary} !important;
  font-family: "Operator Mono", Arial !important;
  font-weight: 600 !important;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  left: 0;
`;

export const CommandInputLabel = styled.label`
  background: ${brand.primary};
  // background: #8ec348;
  color: #ffffff !important;
  padding: 2px 8px !important;
  font-size: 9px !important;
  text-transform: uppercase !important;
  float: left;
  display: block;
  font-weight: 300 !important;
  margin-bottom: 0 !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  z-index: 20;
`;

export const FieldRow = styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;

  i.icon {
    color: ${brand.primary};
    z-index: 99999;
    display: block;
    margin-left: 15px;
    margin-top: -3px;
    color: #707177;
  }
`;
