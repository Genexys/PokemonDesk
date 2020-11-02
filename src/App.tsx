import React from "react";
import cn from "classnames";

import s from "./App.module.scss";

const App = () => {
  return <div className={cn(s.header, "custom")}>App</div>;
};

export default App;
