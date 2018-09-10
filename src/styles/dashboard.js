import styled from "styled-components";
import {brand} from "./colors";

const DashboardHeader = styled.div`
  // background: #1794ff;
  // background: #f0f0f0;
  // background: #EDF5F7;
  // background: linear-gradient(to bottom, #fff 50%, #F5F9FA);
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
  height: 86vh;
  flex-direction: column;
  justify-content: space-evenly;
  
  .intro {
    text-align: center;
    
    h1 {
      font-size: 30px;
      font-weight: 300;
      color: ${brand.primary}
      text-shadow: 0 1px 0 #fff;
    }
    h3 {
      margin-top: 0;
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
`;


export {
  DashboardHeader,
  ProjectsWrapper
}