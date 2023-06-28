import React from "react";
import { useLocation } from "react-router-dom";

import { LandingHeader } from "./Header";
import "./Layout.css";

function Layout(props) {
  const location = useLocation();

  if (location.pathname === "/code" || location.pathname.includes("/app")) {
    return <main>{props.children}</main>;
  }

  return (
    <>
      <div className="Layout">
        <LandingHeader />
        <main>{props.children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
