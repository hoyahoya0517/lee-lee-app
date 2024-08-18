import { useState } from "react";
import stlyes from "./Nav.module.css";
import ColorChange from "../colorChange/colorChange";

export default function Nav({ navOn, heartColor }) {
  const [colorOn, setColorOn] = useState(false);
  return (
    <div className={navOn ? stlyes.navOn : stlyes.navOff}>
      <div className={stlyes.menuContainer}>
        <div className={stlyes.menu}>
          <span onClick={() => setColorOn((prev) => !prev)}>HEART COLOR</span>
          <span>ICON SETTING</span>
          <span>WISH LIST</span>
          <span>COMMING SOON...</span>
        </div>
      </div>
      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723458744/leelee/zim2_rdurek.png" />
      {colorOn && <ColorChange heartColor={heartColor} />}
    </div>
  );
}
