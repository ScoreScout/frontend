import {StyledSidebar} from "./style";
import React from 'react';

const Sidebar = ({
  children
}) => {
  return (
    <StyledSidebar>{children}</StyledSidebar>
  );
};

export default Sidebar;

