import React, { ChangeEvent } from "react";
import { PaletteColors } from "../../../types/palette";
import CustomButton from "../../common/custom-button/custom-button";
import PaletteList from "../palette-list/palette-list";
import "./user-palette-content.scss";

type UserPaletteContentProps = {
  palettes: PaletteColors;
  onChangeColor: (evt: ChangeEvent<HTMLInputElement>) => void;
  onDeleteColorClick: (id: string) => void;
  onAddColorClick: () => void;
};

function UserPaletteContent({
  palettes,
  onChangeColor,
  onDeleteColorClick,
  onAddColorClick,
}: UserPaletteContentProps): JSX.Element {
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

export default UserPaletteContent;
