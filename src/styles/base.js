import styled from "styled-components";

export const font = {
  heading: 'Varela Round, Helvetica Neue, Arial, sans-serif',
  body: 'Montserrat, Helvetica Neue, Arial, san-serif'
};

const AppSidebarWrapper = styled.div`
  // background: #1794ff;
  // background: #f0f0f0;
  background: #EDF5F7;
  width: 25%;
  height: 100vh;
  box-shadow: inset -2px 0 3px #DCE6E8;
`;

const AppContent = styled.div`
  width: 65%;
`;

const AppContainer = styled.div`
  flex: 1;
  height: 100vh;
`;

export {
  AppSidebarWrapper,
  AppContent,
  AppContainer
}