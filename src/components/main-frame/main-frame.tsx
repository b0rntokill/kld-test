import React from "react";
import ContentFrame from "../content-frame/content-frame";
import UserSetting from "../user-setting/user-setting";
import "./main-frame.scss";

function MainFrame(): JSX.Element {
  return (
    <section className="main-frame">
      <ContentFrame>
        <UserSetting />
      </ContentFrame>
    </section>
  );
}

export default MainFrame;
