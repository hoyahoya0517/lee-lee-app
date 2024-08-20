import { useState } from "react";
import stlyes from "./Nav.module.css";
import ColorChange from "../colorChange/colorChange";
import WishList from "../wishList/wishList";

export default function Nav({ navOn, heartColor, wishList }) {
  const [menuOn, setMenuOn] = useState(null);
  return (
    <div className={navOn ? stlyes.navOn : stlyes.navOff}>
      <div className={stlyes.menuContainer}>
        <div className={stlyes.menu}>
          <span
            className={menuOn === "heartColor" ? stlyes.on : ""}
            onClick={() => {
              if (!menuOn) setMenuOn("heartColor");
              else setMenuOn(null);
            }}
          >
            HEART COLOR
          </span>
          <span
            className={menuOn === "wishList" ? stlyes.on : ""}
            onClick={() => {
              if (!menuOn) setMenuOn("wishList");
              else setMenuOn(null);
            }}
          >
            MEMO
          </span>
        </div>
      </div>
      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723458744/leelee/zim2_rdurek.png" />
      <ColorChange heartColor={heartColor} menuOn={menuOn} />
      <WishList wishList={wishList} menuOn={menuOn} />
    </div>
  );
}
