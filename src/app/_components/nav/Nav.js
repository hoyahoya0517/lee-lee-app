import { useState } from "react";
import stlyes from "./Nav.module.css";
import ColorChange from "../colorChange/colorChange";
import IconSetting from "../iconSetting/iconSetting";

export default function Nav({ navOn, heartColor, icon }) {
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
          <span
            className={on === "iconSetting" ? stlyes.on : ""}
            onClick={() => {
              if (!on) setOn("iconSetting");
              else setOn(null);
            }}
          >
            ICON SETTING
          </span>
          <span>WISH LIST</span>
        </div>
      </div>
      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723458744/leelee/zim2_rdurek.png" />
      {on === "heartColor" && <ColorChange heartColor={heartColor} />}
      {on === "iconSetting" && <IconSetting icon={icon} />}
    </div>
  );
}
