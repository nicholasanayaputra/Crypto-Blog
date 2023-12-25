import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  return (
    <div className="lg:bg-hero-img lg:h-[700px]">
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default App;
