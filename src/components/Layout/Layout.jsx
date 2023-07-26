import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
