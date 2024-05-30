"use client";

import { motion } from "framer-motion";
import { transitionChangeChildren } from "../utils/transitions";

interface Props {
    children: React.ReactNode;
    position: 'bottom' | 'right';
    className?: string;
}

export default function TransComponent({ children, position, className }: Props) {
    return (
        <motion.div variants={transitionChangeChildren(position)} initial="hidden" animate="visible" exit="hidden" className={className}>
            {children}
        </motion.div>
    )
}