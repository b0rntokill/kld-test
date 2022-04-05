import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import "./custom-color-picker.scss";

type CustomColorPickerProps = InputHTMLAttributes<HTMLInputElement>;

function CustomColorPicker({ ...props }: CustomColorPickerProps): JSX.Element {
  const { value } = props;
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
        value === "#000000" ? "custom-color-picker--show-border" : ""
      }`}
      {...props}
    />
  );
}

export default CustomColorPicker;
