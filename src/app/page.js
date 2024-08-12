"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Nav from "./_components/nav/Nav";

dayjs.extend(relativeTime);

export default function Home() {
  const [heartOn, setHeartOn] = useState(false);
  const [navOn, setNavOn] = useState(false);
  const [day, setDay] = useState("");
  useEffect(() => {
    const date1 = dayjs(Date.now());
    const date2 = dayjs("2024-08-07");
    setDay(Number(date1.diff(date2, "day")) + 1);
  });
  return (
    <div className={styles.home}>
      <div className={styles.icon}>
        <motion.span drag>🧓🏻</motion.span>
        <motion.span drag>🙋🏻‍♀️</motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0.5, y: -500 }}
        animate={{ opacity: 1, y: 0, scale: heartOn ? 1.2 : 1 }}
        transition={{ duration: 1.3, type: "spring", bounce: 0.4 }}
        className={styles.heart}
      >
        <FaHeart
          onClick={() => {
            setHeartOn((prev) => !prev);
          }}
          size={82}
          color="red"
        />
        {heartOn && <span>{day}</span>}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 1,
          damping: 1.3,
          bounce: 0.2,
        }}
        className={styles.menu}
        onClick={() => {
          setNavOn((prev) => !prev);
        }}
      >
        <img src="https://res.cloudinary.com/hoyahoya/image/upload/v1723302901/leelee/levi_gb47du.png" />
      </motion.div>
      <Nav navOn={navOn} />
    </div>
  );
}
