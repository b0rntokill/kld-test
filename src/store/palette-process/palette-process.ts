import { createSlice } from "@reduxjs/toolkit";
import { PaletteProcess } from "../../types/state";

const initialState: PaletteProcess = {
  palettes: [],
};

const paletteProcessSlice = createSlice({
  name: "palette",
  initialState: initialState,
  reducers: {
    changePalette: (state, action) => {
      state.palettes = action.payload;
    },
    removePalette: (state, action) => {
      state.palettes = action.payload;
    },
  },
});

const { actions, reducer } = paletteProcessSlice;

export const { changePalette, removePalette } = actions;

export const paletteProcess = reducer;
