import { createSlice } from "@reduxjs/toolkit";
import { AppData } from "../../types/state";
import { sendUserData } from "./async-actions";

const initialState: AppData = {
  response: "",
  isLoading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendUserData.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(sendUserData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const { reducer } = dataSlice;

export const appData = reducer;
