"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export default function Home() {
  const [tap, setTap] = useState(false);
  const [day, setDay] = useState("");
  useEffect(() => {
    const date1 = dayjs(Date.now());
    const date2 = dayjs("2024-08-07");
    setDay(Number(date1.diff(date2, "day")) + 1);
  });
  return (
    <div className={styles.home}>
      <div className={styles.icon}>
        <span>🧓🏻</span>
        <span>🙋🏻‍♀️</span>
      </div>
      <motion.div
        className={styles.heart}
        drag
        onDragStart={() => setTap(true)}
        onDragEnd={() => setTap(false)}
        whileDrag={{ scale: 1.2 }}
        dragSnapToOrigin
      >
        <FaHeart size={70} color="red"></FaHeart>
        {tap && <span>{day}</span>}
      </motion.div>
    </div>
  );
}
