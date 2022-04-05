import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../components/common/custom-button";
import { PaletteList } from "../../components/palette-list";
import { addPalette, changePalette, getPalettes, removePalette } from "../../store/palette-process";
import "./user-palette.scss";

function UserPalette(): JSX.Element {
  const palettes = useSelector(getPalettes);
  const dispatch = useDispatch();

  const onAddColorClick = () => {
    dispatch(addPalette());
  };

  const onChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    dispatch(changePalette({ id, value }));
  };

  const onDeleteColorClick = (id: string) => {
    dispatch(removePalette(id));
  };

  return (
    <div className="user-palette">
      <PaletteList
        palettes={palettes}
        onChangeColor={onChangeColor}
        onDeleteColorClick={onDeleteColorClick}
      />
      <CustomButton
        text="Добавить цвет"
        type="button"
        onClick={() => {
          onAddColorClick();
        }}
      />
    </div>
  );
}

export default UserPalette;
