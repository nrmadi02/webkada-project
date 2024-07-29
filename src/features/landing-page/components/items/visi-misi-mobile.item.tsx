// import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { useState } from "react";

interface VisiMisiMobileItemProps {
  title: string;
  description: string;
}

export const VisiMisiMobileItem = ({
  title,
  description,
}: VisiMisiMobileItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsHovered(!isHovered)}
        className="item-visi-shadow w-[180px] cursor-pointer transition-all h-[35px] bg-[#CBCBCB1A] flex items-center justify-center  z-[100]"
        initial={{
          width: "180px",
          height: "35px",
          position: "relative",
          top: "0px",
          left: "0px",
          right: "0px",
        }}
        animate={
          isHovered
            ? {
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                width: "180px",
                height: "35px",
                zIndex: "101",
                opacity: "1",
                backgroundColor: "white",
              }
            : {
                width: "180px",
                height: "35px",
                position: "relative",
                top: "0px",
                left: "0px",
                right: "0px",
              }
        }
        exit={{
          width: "180px",
          height: "35px",
          position: "relative",
          top: "0px",
          left: "0px",
          right: "0px",
        }}
      >
        <div className="flex items-center gap-1">
          <motion.p
            key="visi"
            className="font-semibold text-[10px] leading-[12px] text-[#434343]"
          >
            {title}
          </motion.p>
          <Icon
            icon="mingcute:down-line"
            className={cn(
              "h-4 w-4 text-neutral-900",
              isHovered && "rotate-180"
            )}
          />
        </div>
      </motion.div>
      {isHovered && (
        <motion.div
          key="description"
          className="font-semibold item-visi-shadow w-[180px] z-[102] h-[calc(175px-40px)] px-5 py-5 bg-white absolute top-[36px] text-[10px] text-center text-[#434343] leading-[12px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.div>
      )}
    </>
  );
};
