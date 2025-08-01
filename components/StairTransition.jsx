"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-50 pointer-events-none flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen bg-primary fixed top-0 pointer-events-none z-30"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" } }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
