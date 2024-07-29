import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const SupportSection = () => {
  return (
    <section className="relative">
      <div className="md:container px-5 pb-9 lg:pb-[170px]">
        <div className="subcription-shadow bg-white rounded-lg flex flex-col items-center w-full lg:w-max px-[39px] py-[11px] lg:py-[36px] lg:px-[100px] mt-9 lg:-mt-[85px]">
          <h1 className="font-plusJakartaSans text-center font-bold text-base lg:text-[40px] leading-[19px] lg:leading-[50px]">
            IKUTI JEJAK PAK HARDA
          </h1>
          <p className="text-base hidden lg:block text-neutral-900 max-w-[499px] text-center leading-[19px]">
            Dapatkan informasi terbaru dan ikuti setiap aktivitas Pak Harda di
            Kabupaten Sleman.
          </p>
          <div className="lg:mt-6 mt-3 border border-[#FDC61A] rounded-[18px] w-[240px] lg:w-[476px] flex items-center h-[29px] lg:h-[56px] overflow-hidden relative">
            <input
              className="w-full outline-none px-4 text-[7px] lg:text-base"
              placeholder="Masukkan alamat email anda"
            />
            <Button className="font-semibold lg:text-base text-[9px] bg-[#FDC61A] rounded-none text-neutral-900 hover:text-white transition-all w-[62px] lg:h-[56px] lg:w-[148px]">
              Ikuti
            </Button>
          </div>
          <div className="lg:mt-5 mt-3 flex items-center justify-center gap-5 lg:gap-10">
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
                  className="lg:w-[36px] lg:h-[36px] h-4 w-4"
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
            className="w-full lg:mt-9 mt-[15px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
