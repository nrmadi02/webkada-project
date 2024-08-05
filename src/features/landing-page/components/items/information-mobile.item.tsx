// import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InformationMobileItemProps {
  title: string;
  description: string | ReactNode;
  isHovered: boolean;
  setIsHovered: (_isHovered: boolean) => void;
}

export const InformationMobileItem = ({
  title,
  description,
  isHovered,
  setIsHovered,
}: InformationMobileItemProps) => {
  return (
    <>
      <motion.div
        onClick={() => setIsHovered(!isHovered)}
        className="item-visi-shadow w-full cursor-pointer transition-all h-[110px]  flex items-center justify-center  z-[100]"
        initial={{
          width: "100%",
          height: "110px",
          position: "relative",
          top: "0px",
          left: "0px",
          right: "0px",
          backgroundColor: "#FEFEFE99",
        }}
        animate={
          isHovered
            ? {
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                width: "100%",
                height: "110px",
                zIndex: "101",
                opacity: "1",
                backgroundColor: "white",
              }
            : {
                width: "100%",
                height: "110px",
                position: "relative",
                top: "0px",
                left: "0px",
                right: "0px",
              }
        }
        exit={{
          width: "100%",
          height: "110px",
          position: "relative",
          top: "0px",
          left: "0px",
          right: "0px",
        }}
      >
        <div className="flex items-center gap-1">
          <motion.p
            key="visi"
            className="font-semibold text-[20px] leading-[12px] text-neutral-900"
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
          className="font-semibold w-[100%] z-[102] bg-[#FEFEFE99]  h-[calc(550px-110px)] px-5 py-5  absolute top-[110px] text-[16px] text-center text-[#434343] leading-[19px]"
          initial={{ opacity: 0, height: "0px" }}
          animate={{ opacity: 1, height: 550 - 60 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex pt-[50px] px-5  justify-center w-full ">
            <div className="bg-white p-[15px] rounded-lg item-visi-shadow">
              {description}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
