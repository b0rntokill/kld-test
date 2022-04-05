import React from "react";
import { ContentFrame } from "../content-frame";
import { UserSetting } from "../user-setting";
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
