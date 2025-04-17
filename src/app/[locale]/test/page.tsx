"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.div
        className="w-20 h-20 bg-purple-500 rounded-xl"
        initial={{ x: -50, y: -50 }}
        animate={{ x: 100, y: 100, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        A
      </motion.div>
    </div>
  );
}
