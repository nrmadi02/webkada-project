"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import ScrollLink from "./scroll-link";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar-shadow z-[200] overflow-x-hidden bg-white  sticky top-0">
      <div className="md:container px-5 flex items-center relative justify-center lg:justify-between py-5">
        <Image
          width={200}
          height={100}
          src={"/logo/pak-harda-logo.svg"}
          alt="logo"
          className="w-[147px] h-[37px]"
        />
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden h-max absolute right-5 top-0 bottom-0 my-auto"
        >
          <Icon
            icon={
              open ? "flowbite:x-outline" : "iconamoon:menu-burger-horizontal"
            }
            width={24}
            className="text-neutral-800"
            height={24}
          />
        </button>
        <div className="lg:flex items-center gap-[30px] hidden ">
          <ScrollLink href="#home">
            <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
              Beranda
            </p>
          </ScrollLink>
          <Link href="#visi-misi">
            <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
              Visi dan Misi
            </p>
          </Link>
          <Link href="#profile">
            <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
              Profile
            </p>
          </Link>
          <Link href="#berita">
            <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
              Berita
            </p>
          </Link>
          <Button className="rounded-[10px] bg-[#FDC61A] text-neutral-900 hover:text-white transition-all h-[39px] w-[63px]">
            Ikuti
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ x: 700 }}
              animate={{ x: 0, transition: { duration: 0.5 } }}
              exit={{ x: 700, transition: { duration: 0.5 } }}
              className="lg:hidden h-screen fixed top-[70px] bg-white w-screen"
            >
              <div className="flex flex-col w-full">
                <Link href="#home" onClick={() => setOpen(false)}>
                  <div className="px-5 py-[15px] border-b border-[#434343] border-dashed">
                    <p className="text-base font-semibold text-neutral-900">
                      Beranda
                    </p>
                  </div>
                </Link>
                <Link href="#visi-misi" onClick={() => setOpen(false)}>
                  <div className="px-5 py-[15px] border-b border-[#434343] border-dashed">
                    <p className="text-base font-semibold text-neutral-900">
                      Visi dan Misi
                    </p>
                  </div>
                </Link>
                <Link href="#profile" onClick={() => setOpen(false)}>
                  <div className="px-5 py-[15px] border-b border-[#434343] border-dashed">
                    <p className="text-base font-semibold text-neutral-900">
                      Profile
                    </p>
                  </div>
                </Link>
                <Link href="#berita" onClick={() => setOpen(false)}>
                  <div className="px-5 py-[15px] border-b border-[#434343] border-dashed">
                    <p className="text-base font-semibold text-neutral-900">
                      Berita
                    </p>
                  </div>
                </Link>
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
                        width={32}
                        height={32}
                        className="w-[32px] h-[32px]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
