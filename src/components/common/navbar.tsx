import Image from "next/image";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="navbar-shadow z-[101] bg-white  sticky top-0">
      <div className="container  flex items-center justify-between py-5">
        <Image
          width={200}
          height={100}
          src={"/logo/pak-harda-logo.svg"}
          alt="logo"
          className="w-[147px] h-[37px]"
        />
        <div className="flex items-center gap-[30px] ">
          <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
            Beranda
          </p>
          <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
            Visi dan Misi
          </p>
          <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
            Profil
          </p>
          <p className="text-base cursor-default hover:text-[#FDC61A] font-semibold">
            Berita
          </p>
          <Button className="rounded-[10px] bg-[#FDC61A] text-neutral-900 hover:text-white transition-all h-[39px] w-[63px]">Ikuti</Button>
        </div>
      </div>
    </nav>
  );
};
