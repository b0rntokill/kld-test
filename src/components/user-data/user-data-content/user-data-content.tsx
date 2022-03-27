import React from "react";
import { UserData } from "../../../types/user-data";
import UserForm from "../user-form/user-form";
import "./user-data-content.scss";

type UserDataContentProps = {
  isRequest: boolean;
  responce: string;
  onSubmit: (data: UserData) => void;
};

function UserDataContent({ isRequest, responce, onSubmit }: UserDataContentProps): JSX.Element {
  return (
    <div className="user-data">
      <UserForm isRequest={isRequest} responce={responce} onSubmit={onSubmit} />
    </div>
  );
}

export default UserDataContent;
