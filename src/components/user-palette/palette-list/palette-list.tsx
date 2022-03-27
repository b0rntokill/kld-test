import React, { ChangeEvent } from "react";
import { PaletteColors } from "../../../types/palette";
import CustomColorPicker from "../../common/custom-color-picker/custom-color-picker";
import "./palette-list.scss";

type PaletteListProps = {
  palettes: PaletteColors;
  onChangeColor: (evt: ChangeEvent<HTMLInputElement>) => void;
  onDeleteColorClick: (id: string) => void;
};

function PaletteList({
  palettes,
  onChangeColor,
  onDeleteColorClick,
}: PaletteListProps): JSX.Element {
  return (
    <div className="palette-list">
      {palettes.length ? (
        <ul>
          {palettes.map((el) => (
            <li key={el.id}>
              <CustomColorPicker
                id={el.id}
                value={el.color}
                color={el.color}
                onChange={onChangeColor}
              />
              <span onClick={() => onDeleteColorClick(el.id)}></span>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <span>В палитре нет добавленных цветов.</span>
          <span>Нажмите на кнопку для их добавления.</span>
        </p>
      )}
    </div>
  );
}

export default PaletteList;
