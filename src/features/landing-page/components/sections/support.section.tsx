import { Button } from "@/components/ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

const socialMedias = [
  {
    icon: "/icons/ig-icon.svg",
    link: "https://www.instagram.com/",
  },
  {
    icon: "/icons/tiktok-icon.svg",
    link: "https://tiktok.com/",
  },
  {
    icon: "/icons/fb-icon.svg",
    link: "https://www.facebook.com/",
  },
  {
    icon: "/icons/yt-icon.svg",
    link: "https://www.youtube.com/",
  },
];

const images = [
  { src: "/images/support-mobile-1.svg", alt: "Image 1" },
  { src: "/images/support-mobile-2.svg", alt: "Image 2" },
];

const imagesDesktop = [
  "/images/pdip.svg",
  "/images/golkar.svg",
  "/images/ppp.svg",
  "/images/pks.svg",
  "/images/nasdem.svg",
  "/images/gerindra.svg",
];

const SupportSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const pluginDesktop = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <section className="relative">
      <div className="md:container px-5 pb-9 lg:pb-[10px]">
        <div className="subcription-shadow bg-white rounded-lg flex flex-col items-center w-full lg:w-max px-[20px] py-[40px] lg:py-[36px] lg:px-[100px] mt-9 lg:-mt-[85px]">
          <h1 className="lg:font-plusJakartaSans text-center font-bold text-[20px] lg:text-[40px] leading-[19px] lg:leading-[50px]">
            IKUTI JEJAK PAK HARDA
          </h1>
          <p className="text-base hidden lg:block text-neutral-900 max-w-[499px] text-center leading-[19px]">
            Dapatkan informasi terbaru dan ikuti setiap aktivitas Pak Harda di
            Kabupaten Sleman.
          </p>
          <div className="lg:mt-6 mt-3 border border-[#FDC61A] rounded-[18px] w-[240px] lg:w-[476px] flex items-center h-[29px] lg:h-[56px] overflow-hidden relative">
            <input
              className="w-full outline-none px-4 text-[10px] lg:text-base"
              placeholder="Masukkan alamat email anda"
            />
            <Button className="font-semibold lg:text-base text-[9px] bg-[#FDC61A] rounded-none text-neutral-900 hover:text-white transition-all w-[62px] lg:h-[56px] lg:w-[148px]">
              Ikuti
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-5 lg:gap-10">
            {socialMedias.map((socialMedia) => (
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noreferrer"
                key={socialMedia.icon}
              >
                <Image
                  src={socialMedia.icon}
                  alt="social media icon"
                  width={36}
                  height={36}
                  className="lg:w-[36px] lg:h-[36px] h-[32px] w-[32px]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:mt-[73px] mt-9">
          <h1 className="lg:text-[40px] text-base leading-[19px] lg:leading-[50px] font-plusJakartaSans text-neutral-900 font-bold text-center">
            Pengusung Kami
          </h1>

          <Carousel
            plugins={[pluginDesktop.current as any]}
            opts={{
              loop: true,
              dragFree: true,
            }}
            className="lg:block hidden mt-10"
          >
            <CarouselContent>
              {imagesDesktop.map((image, index) => (
                <CarouselItem key={index} className="lg:basis-1/5">
                  <Image
                    src={image}
                    alt={image + index}
                    width={300}
                    height={300}
                    className="w-full h-[216px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="h-[101px] lg:hidden mt-5 w-full relative">
            <Carousel
              plugins={[plugin.current as any]}
              opts={{
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="w-full h-max"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
