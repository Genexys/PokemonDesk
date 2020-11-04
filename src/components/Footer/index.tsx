import React from "react";
import cn from "classnames";

import s from "./Footer.module.scss";
import global from "../../App.module.scss";

const Footer = () => {
  return (
    <footer className={cn(s.footer)}>
      <div className={cn([global.container, s.footerContainer])}>
        <div className={cn(s.copyright)}>
          <span>Make with</span>
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        </div>

        <div className={cn()}>
          <span>Ours Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
