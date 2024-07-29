"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const videoItems = [
  {
    title:
      "Pembukaan Pameran Tunggal Herman Ong Journey To A Thousand Expressions oleh Harda Kiswaya",
    date: "14 Juli 2024",
    thumbnail: "/images/video-1.png",
  },
  {
    title: "Ngiras : Menikmati Kelezatan Bakmi Pak Mo Tempel Bersama Pak Harda",
    date: "11 Juli 2024",
    thumbnail: "/images/video-2.png",
  },
  {
    title:
      "Pembukaan Pameran Tunggal Herman Ong Journey To A Thousand Expressions oleh Harda Kiswaya",
    date: "14 Juli 2024",
    thumbnail: "/images/video-1.png",
  },
  {
    title: "Ngiras : Menikmati Kelezatan Bakmi Pak Mo Tempel Bersama Pak Harda",
    date: "11 Juli 2024",
    thumbnail: "/images/video-2.png",
  },
];

const VideoNewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative">
      <div className="lg:pb-[170px] pb-9 lg:container">
        <div className="flex justify-between items-end">
          <div className="px-5 lg:px-0">
            <h1 className="font-plusJakartaSans font-bold text-base lg:text-[40px] text-neutral-900">
              Video Pilihan
            </h1>
            <div className="h-[5px] w-[50px] bg-[#FDC61A]" />
          </div>
        </div>
        <div className="lg:mt-[35px] mt-4">
          <Swiper
            onActiveIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            centeredSlides={true}
            slidesPerView={"auto"}
          >
            {videoItems.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className={cn(
                  "lg:min-h-[378px] h-[159px] transition-all !w-[251px] lg:!w-[587px] p-4",
                  idx !== activeIndex && "lg:!scale-[.7] !scale-90"
                )}
              >
                <div className="overflow-hidden relative rounded-lg news-video-shadow">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={587}
                    height={378}
                  />
                  <Image className="h-[50px] w-[50px] absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto" src="/icons/play-icon.svg" alt="play-button" width={50} height={50} />
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoNewsSection;
