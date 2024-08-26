import { SketchPicker } from "react-color";
import styles from "./colorChange.module.css";
import { useState } from "react";
import { changeHeartColor } from "../../../server/server";

export default function ColorChange({ menuOn, heartColor }) {
  const [newHeartcolor, setNewHeartColor] = useState(heartColor);
  const handleChange = async (color) => {
    await changeHeartColor(color.hex);
  };
  return (
    <div
      className={
        menuOn === "heartColor" ? styles.colorChangeOn : styles.colorChangeOff
      }
    >
      <SketchPicker
        color={newHeartcolor}
        onChange={(color) => {
          setNewHeartColor(color);
        }}
        onChangeComplete={(color) => {
          handleChange(color);
        }}
        width={250}
      />
    </div>
  );
}
