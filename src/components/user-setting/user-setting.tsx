import React from "react";
import { Outlet } from "react-router-dom";
import { NavLinks } from "../nav-links";
import "./user-setting.scss";

function UserSetting(): JSX.Element {
  return (
    <div className="user-setting">
      <NavLinks />
      <Outlet />
    </div>
  );
}

export default UserSetting;
