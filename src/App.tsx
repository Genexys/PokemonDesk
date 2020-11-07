import React from "react";
import cn from "classnames";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import MainScreen from "./components/MainScreen";

import s from "./App.module.scss";

const App = () => {
  return (
    <div className={cn(s.app)}>
      <Header />
      <MainContent>
        <MainScreen />
      </MainContent>
      <Footer />
    </div>
  );
};

export default App;
