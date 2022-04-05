import React, { ChangeEvent, DragEvent, InputHTMLAttributes, useState } from "react";
import "./custom-image-input.scss";

const ALLOWED_TYPE_REGEX = /.+(.jpg|.jpeg|.gif|.png)$/;

type CustomImageInputProps = {
  onSelectImage: (img: File) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function CustomImageInput({ onSelectImage, ...otherProps }: CustomImageInputProps): JSX.Element {
  const [hover, setHover] = useState(false);
  const [path, setPath] = useState<string>();
  const [allowed, setAllowed] = useState(true);

  const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
      const image = evt.target.files[0];
      const isAllowed = ALLOWED_TYPE_REGEX.test(image.name);

      if (isAllowed) {
        setPath(URL.createObjectURL(image));
        onSelectImage(image);
        setAllowed(true);
      }

      setAllowed(isAllowed);
    }
  };

  const onLabelDrop = (evt: DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
    const image = evt.dataTransfer.files[0];
    const isAllowed = ALLOWED_TYPE_REGEX.test(image.name);

    if (isAllowed) {
      setPath(URL.createObjectURL(image));
      onSelectImage(image);
    }

    setAllowed(isAllowed);
    setHover(false);
  };

  const onLabelDragEnter = () => {
    setHover(true);
  };

  const onLabelDragLeave = () => {
    setHover(false);
  };

  const onLabelDragEnd = (evt: DragEvent<HTMLLabelElement>) => {
    evt.preventDefault();
  };

  return (
    <div className="custom-image-input">
      <span className="custom-image-input__label">Фото</span>
      <label
        className={`custom-image-input__drop-zone ${path ? "uploaded" : ""} ${
          hover ? "hover" : ""
        }`}
        htmlFor="image"
        onDragEnter={onLabelDragEnter}
        onDragLeave={onLabelDragLeave}
        onDragOver={onLabelDragEnd}
        onDrop={onLabelDrop}
      >
        <img src={path} />
      </label>
      <input id="image" name="image" type="file" onChange={onImageChange} {...otherProps} />
      {!allowed ? (
        <span className="custom-image-input__error">Недопустимый формат изображения</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default CustomImageInput;
