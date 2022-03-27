import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import "./custom-color-picker.scss";

type CustomColorPickerProps = {
  color: string;
} & InputHTMLAttributes<HTMLInputElement>;

function CustomColorPicker({ color, ...otherProps }: CustomColorPickerProps): JSX.Element {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TODO задержка сделана для избавления от бага появления колорпикера (нативного) не верно спозиционированного относительно элемента.
    // Возникал при быстром прокликивании кнопки "Добавить цвет"
    setTimeout(() => {
      if (input.current) {
        input.current.click();
      }
    }, 50);
  }, []);

  return (
    <input
      type="color"
      ref={input}
      className={`custom-color-picker  ${
        color === "#000000" ? "custom-color-picker--show-border" : ""
      }`}
      {...otherProps}
    />
  );
}

export default CustomColorPicker;
