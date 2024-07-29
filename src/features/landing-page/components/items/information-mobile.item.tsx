// import { useState } from "react";
import { motion } from "framer-motion";

import { ReactNode, useState } from "react";

interface InformationMobileItemProps {
  title: string;
  description: ReactNode;
}

export const InformationMobileItem = ({
  title,
  description,
}: InformationMobileItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {isHovered === true && (
        <>
          <motion.div
            className="absolute inset-0 bg-white blur-lg w-[700px] opacity-0 z-[99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            key="visi"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            className="p-[10px] text-[9px] w-[215px] information-shadow absolute left-[15px] top-0 bottom-0 my-auto bg-white h-max z-[100] rounded-[8px]"
          >
            {description}
          </motion.div>
        </>
      )}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="item-visi-shadow w-full cursor-pointer h-[35px] bg-[#d3e5e7] bg-opacity-30 flex items-center justify-center  z-[100] relative"
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          scale: 1.1,
          zIndex: 101,
        }}
      >
        <motion.p
          key="visi"
          className="text-[#434343]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: isHovered ? 12 : 9,
            fontWeight: isHovered ? 700 : 600,
          }}
        >
          {title}
        </motion.p>
      </motion.div>
    </>
  );
};
