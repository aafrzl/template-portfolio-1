import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, ease: "easeIn" }}
      className="bg-[#292929] my-32 h-24 w-1 rounded-full hidden sm:block"
    />
  );
}
