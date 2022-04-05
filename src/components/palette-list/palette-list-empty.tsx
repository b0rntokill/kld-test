import React from "react";

function PaletteListEmpty(): JSX.Element {
  return (
    <p>
      <span>В палитре нет добавленных цветов.</span>
      <span>Нажмите на кнопку для их добавления.</span>
    </p>
  );
}

export default PaletteListEmpty;
