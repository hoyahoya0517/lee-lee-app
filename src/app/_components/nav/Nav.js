import stlyes from "./Nav.module.css";

export default function Nav({ navOn }) {
  return (
    <div className={navOn ? stlyes.navOn : stlyes.navOff}>
      <div className={stlyes.menu}></div>
      <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723458744/leelee/zim2_rdurek.png" />
    </div>
  );
}
