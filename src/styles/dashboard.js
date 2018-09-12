import styled from "styled-components";
import {brand} from "./colors";
import {font} from "./base";
import * as color from "color";

const DashboardHeader = styled.div`
  margin-top: 20px;
  height: 60px;
  border-bottom: 1px solid #E1EBED;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: ${brand.primary};
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Montserrat', Arial;
    font-weight: 700;
  }
  
  .user__card {
    display: flex;
    align-items: center;
    
    .user-name {
      color: #222;
    }
    
    .user-photo {
      border: 1px solid #ccc;
      padding: 3px;
      border-radius: 50px;
      display:block;
      float:right;
      margin-left: 0;
      margin-left: 10px;
      
      img {
        margin-left: 0 !important;
      }
    }
  }
`;

const ProjectsWrapper = styled.div`
  background: linear-gradient(to top, #fff 50%, #EDF5F7);
  display: flex;
  flex: 1;
  height: 100%;
  position: relative;
  height: 80vh;
  overflow:hidden;
  flex-direction: column;
  justify-content: ${props => props.userHasNoProjects ? 'space-evenly' : 'flex-start'};
  
  .intro {
    text-align: center;
    
    h1 {
      font-family: ${font.heading};
      font-size: 36px;
      font-weight: 300;
      color: ${brand.primary}
      text-shadow: 0 1px 0 #fff;
    }
    h3 {
      margin-top: 0;
      font-family: ${font.heading};
      font-size: 26px;
      font-weight: 300;
      text-shadow: 0 1px 0 #fff;
    }
    p {
      font-size: 16px;    
      text-shadow: 0 1px 0 #fff;
    }
    
    button {
      text-transform: uppercase;
      font-size: 14px !important;
      // font-weight: 300;
      transition: background .35s ease-in-out,
                  box-shadow .35s ease-in-out;
      box-shadow: 0 0 20px #9CB6F7;
      &:hover {
        background: ${brand.primaryHover} !important;
        box-shadow: 0 0 20px #7A9EF5;
      }
    }
  }
  
  .dashboard-header {
    padding: 30px 15px;
    margin-bottom: 15px;
    // background: #fff;
    border-bottom: 1px solid #E1EBED;
    h3 {
      margin-top: 10px;
      font-size: 24px;
      color: ${brand.primary};
      font-family: ${font.heading};
      margin-bottom: 5px;
    }
    p {
      color: #aaa;
    }
  }
`;


const ProjectItemStyled = styled.div`
  border-top: 1px solid #E1EBED;
  border-bottom: 1px solid #E1EBED;
  padding: 20px 20px;
  cursor: pointer;
  background: #fff;
  max-width: 95%; 
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px #E1EBED;
  border-radius: 10px;
  
  h3 {
    font-size: 16px;
    font-family: 'Montserrat', Arial;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 5px;
    text-shadow: 0 1px 0 #fff;
  }
  
  span.project__path {
    font-size: 12px;
    color: #aaa;
    text-shadow: 0 1px 0 #fff;
  }
  
`;
export {
  DashboardHeader,
  ProjectsWrapper,
  ProjectItemStyled,
}