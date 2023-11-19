import { StyledSidebar } from "./style";
import React from "react";
import type { SidebarProps } from "../../types/SidebarTypes.ts";

const Sidebar = ({ children }: SidebarProps): React.JSX.Element => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
