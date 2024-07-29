// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

interface VisiMisiItemProps {
  title: string;
  description: string;
}

export const VisiMisiItem = ({ title, description }: VisiMisiItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <AnimatePresence>
        {/* {isHovered === true && (
          <motion.div
            className="fixed inset-0 bg-black opacity-0 z-[99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )} */}
      </AnimatePresence>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="item-visi-shadow w-[697px] cursor-pointer h-[120px] bg-[#CBCBCB1A] flex items-center justify-center  z-[100] relative"
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          width: "730px",
          padding: '30px'
        }}
      >
        {isHovered && (
          <motion.p
            key="description"
            className="font-semibold text-base text-center text-[#434343] leading-[19px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
        {!isHovered && (
          <motion.p
            key="visi"
            className="font-semibold text-[24px] text-[#434343]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.p>
        )}
      </motion.div>
    </>
  );
};
