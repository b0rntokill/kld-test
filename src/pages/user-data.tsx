import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDataContent from "../components/user-data/user-data-content/user-data-content";
import { getIsRequest, getResponce, sendUserData } from "../store/app-data";
import { UserData as Data } from "../types/user-data";

function UserData(): JSX.Element {
  const isRequest = useSelector(getIsRequest);
  const responce = useSelector(getResponce);
  const dispatch = useDispatch();

  const onSubmit = (data: Data) => {
    dispatch(sendUserData(data));
  };

  return <UserDataContent isRequest={isRequest} responce={responce} onSubmit={onSubmit} />;
}

export default UserData;
