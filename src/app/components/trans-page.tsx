"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import { transitionChangePage } from "../utils/transitions";

export default function TransPage() {
    return(
        <AnimatePresence mode="wait">
            <div>
                <motion.div className="fixed top-0 bottom-0 right-full w-full h-full z-30 bg-[#2e2257]" variants={transitionChangePage} initial="initial" animate="animate" exit="exit" transition={{delay:0.2, duration: 0.6, ease:"easeInOut"}}>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}