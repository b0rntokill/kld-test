import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiRoute } from "../../const";
import { api } from "../../services/api";
import { UserData } from "../../types/user-data";

const USER_DATA_SEND_FAIL_MESSAGE = "Отправка данных пользователя завершилась с ошибкой";

export const sendUserData = createAsyncThunk("data/sendUserData", async (data: UserData) => {
  const {
    id,
    image,
    contact: [name, surname, patronymic],
  } = data;

  // TODO я не совсем понял тз по отправке, сделал так, получаю success. Кажется нет проверки contact.
  const formData = new FormData();
  formData.append("action", "send_data");
  formData.append("id", id);
  formData.append("image", image);
  formData.append("contact[]", name);
  formData.append("contact[]", surname);
  formData.append("contact[]", patronymic);
  try {
    const { data } = await api({
      method: "post",
      url: ApiRoute.UserData,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return JSON.stringify(data);
  } catch (evt) {
    toast.error(USER_DATA_SEND_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});
