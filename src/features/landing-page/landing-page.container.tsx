"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoNewsSection from "./components/sections/video-news.section";
import HeroSection from "./components/sections/hero.section";
import SupportSection from "./components/sections/support.section";
import { VisiMisiSection } from "./components/sections/visi-misi.section";
import InformationSection from "./components/sections/information.section";
import NewsSection from "./components/sections/news.section";
import AIHardaChat from "./components/chat/ai-harda.chat";
import VisiSection from "./components/sections/visi.section";

export const LandingPageContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <HeroSection />
      <SupportSection />
      <VisiSection />
      <VisiMisiSection />
      <InformationSection />
      <NewsSection />
      <VideoNewsSection />

      <AIHardaChat />

      <Dialog open={false} onOpenChange={setIsOpen}>
        <DialogContent className="!rounded-[16px] px-[58px] py-[50px] max-w-max z-[999]">
          <DialogHeader>
            <div>
              <h1 className="text-center text-[24px] text-neutral-900 font-semibold">
                Kegiatan yang akan Datang
              </h1>
              <div className="flex gap-7 mt-7">
                <Image
                  src="/images/activity-image.svg"
                  alt="kegiatan"
                  width={328}
                  height={408}
                  className="w-[326px] h-[408px]"
                />
                <div className="py-[10px]  max-w-[326px] flex items-center flex-col">
                  <h1 className="text-center text-base font-semibold text-neutral-900 leading-[19px]">
                    Suara Warga, Suara Harda Vol. 1 : Warga Bisa Bicara
                  </h1>
                  <p className="text-neutral-900 text-justify mt-7 text-base leading-[19px]">
                    Silakan besok malam merapat ke Instagram dan TikTok milik
                    saya. Mulai Pukul 19.00 WIB akan ada live dalam sesi tanya
                    jawab.
                  </p>
                  <p className="text-neutral-900 text-justify mt-5 text-base leading-[19px]">
                    Boleh untuk mengirimkan pertanyaan mulai dari sekarang
                    melalui tombol di bawah atau bergabung dalam live besok.
                    Saya akan menjawabnya.
                  </p>
                  <p className="text-neutral-900 text-justify mt-5 text-base leading-[19px]">
                    Mari kita berdiskusi dan menelaah lebih jauh. Suara bersama.
                    Saya tunggu ya!
                  </p>
                  <Button className="rounded-[10px]  mt-8 bg-[#FDC61A] text-neutral-900 hover:text-white transition-all h-[39px] w-[152px]">
                    Kirim Pertanyaan
                  </Button>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
