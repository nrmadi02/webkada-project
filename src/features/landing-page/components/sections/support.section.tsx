import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const SupportSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="md:container px-5 pb-9 lg:pb-[170px]">
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
          <Image
            src="/images/support-politic-image.svg"
            alt="support image"
            width={1200}
            height={600}
            className="w-full hidden lg:block lg:mt-9 mt-[15px]"
          />
          <div className="h-[101px] lg:hidden mt-5 w-full relative">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt={image.alt}
                animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-full absolute h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
