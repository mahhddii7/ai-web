import { motion } from "framer-motion";

function LaptopContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      <img src="/image/laptop.png" className="drop-shadow-[0_0_30px_#7b59ff]" />
    </motion.div>
  );
}

export default LaptopContent;
