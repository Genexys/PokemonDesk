import React from "react";
import cn from "classnames";
import Menu from "../Menu/Index";

import s from "./Header.module.scss";
import global from "../../App.module.scss";

import logo from "./img/Logo.svg";

const items: string[] = ["Home", "Pokedex", "Legendaries", "Documentation"];

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(global.container, s.container)}>
        <img src={logo} alt="Pokemon" />

        <nav className={cn()}>
          <Menu items={items} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
