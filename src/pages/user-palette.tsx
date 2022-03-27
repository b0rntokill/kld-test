import { nanoid } from "nanoid";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_COLOR } from "../const";
import { changePalette, getPalettes, removePalette } from "../store/palette-process";
import UserPaletteContent from "../components/user-palette/user-palette-content/user-palette-content";

function UserPalette(): JSX.Element {
  const palettes = useSelector(getPalettes);
  const dispatch = useDispatch();

  const onAddColorClick = () => {
    const copy = [...palettes];
    const defaultPalette = {
      id: nanoid(),
      color: DEFAULT_COLOR,
    };
    copy.push(defaultPalette);
    dispatch(changePalette(copy));
  };

  const onChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    const copy = [...palettes];
    const index = copy.findIndex((el) => el.id === id);
    const el = copy[index];
    copy.splice(index, 1, { ...el, color: value });
    dispatch(changePalette(copy));
  };

  const onDeleteColorClick = (id: string) => {
    const index = palettes.findIndex((el) => el.id === id);
    const copy = [...palettes];
    copy.splice(index, 1);
    dispatch(removePalette(copy));
  };

  return (
    <UserPaletteContent
      palettes={palettes}
      onAddColorClick={onAddColorClick}
      onChangeColor={onChangeColor}
      onDeleteColorClick={onDeleteColorClick}
    />
  );
}

export default UserPalette;
