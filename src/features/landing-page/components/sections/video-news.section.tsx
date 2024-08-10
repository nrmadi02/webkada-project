"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
        <div className="lg:mt-[35px] mt-4 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {videoItems.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="flex  flex-col items-center justify-center"
                >
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={1000}
                      height={1000}
                      className="h-[145px] w-[260px] lg:w-[800px] lg:h-[450px] rounded-lg"
                    />
                    <Image
                      className="h-[50px] w-[50px] absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto"
                      src="/icons/play-icon.svg"
                      alt="play-button"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className="max-w-[260px] lg:max-w-[800px] lg:text-3xl text-center mt-[10px] text-sm font-semibold text-neutral-900">
                    {video.title}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5" />
            <CarouselNext className="absolute right-5" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoNewsSection;
