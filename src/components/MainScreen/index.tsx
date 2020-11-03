import React from "react";
import cn from "classnames";

import s from "./MainScreen.module.scss";
import global from "../../App.module.scss";

const MainScreen = () => {
  return (
    <div className={cn([global.container, s.mainScreen])}>
      <div className={cn(s.description)}>
        <h1 className={cn(s.title)}>
          <span>Find</span> all your favorite <span>Pokemon</span>
        </h1>
        <h2 className={cn(s.secondTitle)}>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </h2>
      </div>
    </div>
  );
};

export default MainScreen;
