import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DEFAULT_COLOR } from "../../const";
import { PaletteProcess } from "../../types/state";

const initialState: PaletteProcess = {
  palettes: [],
};

const paletteProcessSlice = createSlice({
  name: "palette",
  initialState: initialState,
  reducers: {
    addPalette: (state) => {
      const defaultPalette = {
        id: nanoid(),
        color: DEFAULT_COLOR,
      };
      state.palettes.push(defaultPalette);
    },
    changePalette: (state, action) => {
      const { id, value } = action.payload;
      const index = state.palettes.findIndex((el) => el.id === id);
      const el = state.palettes[index];
      state.palettes.splice(index, 1, { ...el, color: value });
    },
    removePalette: (state, action) => {
      const { id } = action.payload;
      const index = state.palettes.findIndex((el) => el.id === id);
      state.palettes.splice(index, 1);
    },
  },
});

const { actions, reducer } = paletteProcessSlice;

export const { addPalette, changePalette, removePalette } = actions;

export const paletteProcess = reducer;
