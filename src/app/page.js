"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function Home() {
  const [tap, setTap] = useState(false);
  useEffect(() => {
    console.log(tap);
  }, [tap]);
  return (
    <div className={styles.home}>
      <div className={styles.icon}></div>
      <motion.div
        className={styles.heart}
        drag
        onTap={() => setTap(true)}
        onTapCancel={() => setTap(false)}
        onDragStart={() => setTap(true)}
        onDragEnd={() => setTap(false)}
        whileDrag={{ scale: 1.2 }}
        dragSnapToOrigin
      >
        <FaHeart size={64} color="red"></FaHeart>
        <span>{tap && "hihi"}</span>
      </motion.div>
    </div>
  );
}
