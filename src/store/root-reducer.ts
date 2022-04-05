import { combineReducers } from "redux";
import { appData } from "./app-data/app-data";
import { paletteProcess } from "./palette-process";

export enum NameSpace {
  data = "DATA",
  palette = "PALETTE",
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.palette]: paletteProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
