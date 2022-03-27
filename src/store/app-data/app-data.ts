import { createSlice } from "@reduxjs/toolkit";
import { AppData } from "../../types/state";
import { sendUserData } from "./async-actions";

const initialState: AppData = {
  response: "",
  isRequest: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendUserData.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(sendUserData.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isRequest = false;
      })
      .addCase(sendUserData.rejected, (state) => {
        state.isRequest = false;
      });
  },
});

const { reducer } = dataSlice;

export const appData = reducer;
