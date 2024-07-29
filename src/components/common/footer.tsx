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

const Footer = () => {
  return (
    <footer className="lg:py-[70px] py-[24px] bg-[#FDC61AE5]">
      <div className="container flex items-center justify-between">
        <p className="text-neutral-900 text-[5px] lg:text-base font-bold">
          © Copyright 2024 | hardakiswaya.com
        </p>
        <div className="mt-5 flex items-center justify-center gap-[10px] lg:gap-10">
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
                width={24}
                height={24}
                className="w-[10px] h-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
