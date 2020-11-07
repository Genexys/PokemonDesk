import React from "react";
import cn from "classnames";

import s from "./MainContent.module.scss";

const MainContent = ({ children }: any) => {
  return <div className={cn(s.mainContent)}>{children}</div>;
};

export default MainContent;
