import styles from "./wishList.module.css";

export default function WishList({ wishList, menuOn }) {
  return (
    <div
      className={menuOn === "wishList" ? styles.wishListOn : styles.wishListOff}
    >
      <div className={styles.top}></div>
      <div className={styles.main}>
        <textarea value={wishList.text} />
      </div>
    </div>
  );
}
