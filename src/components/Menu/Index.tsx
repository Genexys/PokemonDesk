import React from "react";
import cn from "classnames";

import s from "./Menu.module.scss";

const Menu = ({ items }: any) => {
  return (
    <ul className={cn(s.listMenu)}>
      {items.map((el: string) => (
        <li className={cn(s.itemMenu)}>
          <a href={`/${el}/`} className={cn(s.itemLink)}>
            {el}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
