import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserForm } from "../../components/user-form";
import { getIsLoading, getResponce, sendUserData } from "../../store/app-data";
import { UserData as Data } from "../../types/user-data";
import "./user-data.scss";

function UserData(): JSX.Element {
  const isLoading = useSelector(getIsLoading);
  const responce = useSelector(getResponce);
  const dispatch = useDispatch();

  const onSubmit = (data: Data) => {
    dispatch(sendUserData(data));
  };

  return (
    <div className="user-data">
      <UserForm isLoading={isLoading} responce={responce} onSubmit={onSubmit} />
    </div>
  );
}

export default UserData;
