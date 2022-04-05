import React, { FormEvent, ChangeEvent, useRef, useState } from "react";
import { UserData } from "../../types/user-data";
import { CustomButton } from "../common/custom-button";
import { CustomImageInput } from "../common/custom-image-input";
import { CustomInput } from "../common/custom-input";
import "./user-form.scss";

type UserFormProps = {
  isLoading: boolean;
  responce: string;
  onSubmit: (data: UserData) => void;
};

function UserForm({ isLoading, responce, onSubmit }: UserFormProps): JSX.Element {
  const [formFields, setFormFields] = useState({
    name: "",
    surname: "",
    patronymic: "",
  });

  const [image, setImage] = useState<File>();
  const [isSubmited, setIsSubmited] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmit = (evt: FormEvent) => {
    let isValid;

    if (form.current) {
      isValid = form.current.reportValidity();
    }

    setIsSubmited(true);
    evt.preventDefault();

    if (isValid && image) {
      const userData = {
        action: "send_data",
        id: "1",
        contact: [formFields.name, formFields.surname, formFields.patronymic],
        image,
      };

      onSubmit(userData);
    }
  };

  return (
    <form
      ref={form}
      className={`user-form ${!isSubmited ? "user-form--no-submited" : ""}`}
      noValidate
      onSubmit={onFormSubmit}
    >
      <CustomInput
        name="name"
        type="text"
        label="Имя"
        placeholder="Лев"
        value={formFields.name}
        onChange={onInputChange}
        required
      />
      <CustomInput
        name="surname"
        type="text"
        label="Фамилия"
        placeholder="Лещенко"
        value={formFields.surname}
        onChange={onInputChange}
        required
      />
      <CustomInput
        name="patronymic"
        type="text"
        label="Отчество"
        placeholder="Валерьянович"
        value={formFields.patronymic}
        onChange={onInputChange}
        required
      />
      <CustomImageInput
        accept=".jpg, .jpeg, .gif, .png"
        required={!image}
        onSelectImage={setImage}
      />
      <div className="user-form__btn-wrapper">
        <CustomButton text="Сохранить" type="submit" disabled={isLoading} />
      </div>
      <div className="user-form__textarea">
        <label>Response</label>
        <textarea defaultValue={responce} />
      </div>
    </form>
  );
}

export default UserForm;
