"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export default function Home() {
  const [heartOn, setHeartOn] = useState(false);
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
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        className={styles.heart}
        onClick={() => {
          setHeartOn(true);
        }}
      >
        <FaHeart size={64} color="red" />
        {heartOn && <span>{day}</span>}
      </motion.div>
    </div>
  );
}
