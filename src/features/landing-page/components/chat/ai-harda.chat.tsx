"use client";

import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AIHardaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 bottom-5 lg:right-[85px] lg:bottom-10 z-[500]"
      >
        <Image
          src="/icons/chat-icon.svg"
          alt="chat-icon"
          className="lg:h-[85px] lg:w-[85px]"
          width={65}
          height={65}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ y: 1000, transition: { duration: 0.3 } }}
            className="fixed lg:h-[560px] h-[calc(100vh-150px)] overflow-hidden rounded-[10px] w-full lg:w-[430px] bg-white right-0 lg:right-[85px] bottom-0 z-[600]"
          >
            <div className="flex items-center py-2 lg:py-[24px] bg-black w-full justify-between px-6 lg:px-10">
              <div className="flex items-center gap-5">
                <Image
                  src="/icons/harda-icon.svg"
                  alt="chat-icon"
                  width={55}
                  height={55}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white text-base font-semibold">
                    Harda Kiswa
                  </p>
                  <p className="text-white text-sm">Calon Bupati Sleman 2025</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Icon
                  icon="mingcute:down-line"
                  className="h-6 w-6 text-white"
                />
              </button>
            </div>
            <div className="w-full h-full flex flex-col pb-[250px] gap-10 overflow-y-auto px-[30px] py-6">
              <div className="rounded-[8px] self-start text-xs relative box-chat-shadow px-3 py-3 bg-[#CBCBCB] w-[249px]">
                Ada yang ingin Anda ketahui tentang saya? Tanyakan melalui chat!
                <Image
                  alt="chat-icon"
                  src="/icons/me-send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -left-[10px] -bottom-[10px]"
                />
              </div>
              <div className="rounded-[8px] self-end text-xs relative box-chat-shadow px-3 py-3 bg-[#F0F0F0] w-[249px]">
                Siapa itu Harda Kiswaya?
                <Image
                  alt="chat-icon"
                  src="/icons/send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -right-[7px] -bottom-[8px]"
                />
              </div>
              <div className="rounded-[8px] self-start text-xs relative box-chat-shadow px-3 py-3 bg-[#CBCBCB] w-[249px]">
                Ada yang ingin Anda ketahui tentang saya? Tanyakan melalui chat!
                <Image
                  alt="chat-icon"
                  src="/icons/me-send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -left-[10px] -bottom-[10px]"
                />
              </div>
              <div className="rounded-[8px] self-end text-xs relative box-chat-shadow px-3 py-3 bg-[#F0F0F0] w-[249px]">
                Siapa itu Harda Kiswaya?
                <Image
                  alt="chat-icon"
                  src="/icons/send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -right-[7px] -bottom-[8px]"
                />
              </div>
              <div className="rounded-[8px] self-start text-xs relative box-chat-shadow px-3 py-3 bg-[#CBCBCB] w-[249px]">
                Ada yang ingin Anda ketahui tentang saya? Tanyakan melalui chat!
                <Image
                  alt="chat-icon"
                  src="/icons/me-send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -left-[10px] -bottom-[10px]"
                />
              </div>
              <div className="rounded-[8px] self-end text-xs relative box-chat-shadow px-3 py-3 bg-[#F0F0F0] w-[249px]">
                Siapa itu Harda Kiswaya?
                <Image
                  alt="chat-icon"
                  src="/icons/send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -right-[7px] -bottom-[8px]"
                />
              </div>
              <div className="rounded-[8px] self-start text-xs relative box-chat-shadow px-3 py-3 bg-[#CBCBCB] w-[249px]">
                Ada yang ingin Anda ketahui tentang saya? Tanyakan melalui chat!
                <Image
                  alt="chat-icon"
                  src="/icons/me-send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -left-[10px] -bottom-[10px]"
                />
              </div>
              <div className="rounded-[8px] self-end text-xs relative box-chat-shadow px-3 py-3 bg-[#F0F0F0] w-[249px]">
                Siapa itu Harda Kiswaya?
                <Image
                  alt="chat-icon"
                  src="/icons/send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -right-[7px] -bottom-[8px]"
                />
              </div>
              <div className="rounded-[8px] self-start text-xs relative box-chat-shadow px-3 py-3 bg-[#CBCBCB] w-[249px]">
                Ada yang ingin Anda ketahui tentang saya? Tanyakan melalui chat!
                <Image
                  alt="chat-icon"
                  src="/icons/me-send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -left-[10px] -bottom-[10px]"
                />
              </div>
              <div className="rounded-[8px] self-end text-xs relative box-chat-shadow px-3 py-3 bg-[#F0F0F0] w-[249px]">
                Siapa itu Harda Kiswaya?
                <Image
                  alt="chat-icon"
                  src="/icons/send-icon.svg"
                  width={20}
                  height={20}
                  className="absolute -right-[7px] -bottom-[8px]"
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-5 left-0 mx-auto w-[90%] lg:w-[400px]">
              <Input
                placeholder="Tuliskan pernyataan anda"
                className="h-[54px] rounded-[40px] px-5 border-[#878787]"
              />
              <button className="absolute my-auto top-0 bottom-0 right-5">
                <Icon icon="tabler:send" className="h-6 w-6 " />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIHardaChat;
