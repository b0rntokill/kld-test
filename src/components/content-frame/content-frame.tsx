import React, { ReactNode } from "react";
import "./content-frame.scss";

type ContentFrameProps = {
  children: ReactNode;
};

function ContentFrame({ children }: ContentFrameProps): JSX.Element {
  return <div className="content-frame">{children}</div>;
}

export default ContentFrame;
