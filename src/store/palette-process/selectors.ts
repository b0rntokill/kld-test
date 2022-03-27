import { PaletteColors } from "../../types/palette";
import { NameSpace, RootState } from "../root-reducer";

export const getPalettes = (state: RootState): PaletteColors => state[NameSpace.palette].palettes;
