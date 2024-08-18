import { useState } from "react";
import stlyes from "./Nav.module.css";
import ColorChange from "../colorChange/colorChange";

export default function Nav({ navOn, heartColor }) {
  const [on, setOn] = useState(null);
  return (
    <div className={navOn ? stlyes.navOn : stlyes.navOff}>
      <div className={stlyes.menuContainer}>
        <div className={stlyes.menu}>
          <span
            className={on === "heartColor" ? stlyes.on : ""}
            onClick={() => {
              if (!on) setOn("heartColor");
              else setOn(null);
            }}
          >
            HEART COLOR
          </span>
          <span>WISH LIST</span>
        </div>
      </div>
      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723458744/leelee/zim2_rdurek.png" />
      {on === "heartColor" && <ColorChange heartColor={heartColor} />}
    </div>
  );
}
