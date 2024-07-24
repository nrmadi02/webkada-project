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
      <div className="container pb-[170px]">
        <div className="subcription-shadow bg-white rounded-lg flex flex-col items-center w-max py-[36px] px-[100px] -mt-[85px]">
          <h1 className="font-plusJakartaSans text-center font-bold text-[40px] leading-[50px]">
            IKUTI JEJAK PAK HARDA
          </h1>
          <p className="text-base text-neutral-900 max-w-[499px] text-center leading-[19px]">
            Dapatkan informasi terbaru dan ikuti setiap aktivitas Pak Harda di
            Kabupaten Sleman.
          </p>
          <div className="mt-6 border border-[#FDC61A] rounded-[18px] w-[476px] flex items-center h-[56px] overflow-hidden relative">
            <input
              className="w-full outline-none px-4 text-base"
              placeholder="Masukkan alamat email anda"
            />
            <Button className="font-semibold bg-[#FDC61A] rounded-none text-neutral-900 hover:text-white transition-all h-[56px] w-[148px]">
              Ikuti
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-10">
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
                  className="w-[36px] h-[36px]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[73px]">
          <h1 className="text-[40px] leading-[50px] font-plusJakartaSans text-neutral-900 font-bold text-center">
            Pengusung Kami
          </h1>
          <Image
            src="/images/support-politic-image.svg"
            alt="support image"
            width={1200}
            height={600}
            className="w-full mt-9"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
