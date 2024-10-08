import { useEffect, useState } from "react";
import styles from "./wishList.module.css";
import { updateMemo } from "../../../server/server";

export default function WishList({ wishList, menuOn }) {
  const [memo, setMemo] = useState(wishList);
  const [timer, setTimer] = useState();
  const handleChange = (e) => {
    setMemo(e.target.value);
  };
  const handleChangeMemo = async () => {
    await updateMemo(memo);
  };
  useEffect(() => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        handleChangeMemo();
      }, 500)
    );
  }, [memo]);
  return (
    <div
      className={menuOn === "wishList" ? styles.wishListOn : styles.wishListOff}
    >
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.main}>
          <textarea spellCheck={false} value={memo} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
