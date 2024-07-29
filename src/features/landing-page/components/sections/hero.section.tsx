const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-full bg-cover bg-[url('/images/bg-hero.webp')] w-full"
    >
      <div className="md:container px-5 py-[50px] lg:pt-[190px] lg:pb-[282px]">
        <div className="flex flex-col gap-[6px] lg:gap-0">
          <h1 className="lg:text-[54px] text-base lg:leading-[70px] font-plusJakartaSans font-bold text-white">
            UNTUK SLEMAN
          </h1>
          <h1 className="lg:text-[48px] text-[15px] lg:leading-[60px] font-plusJakartaSans font-bold text-white">
            BEN ORA
          </h1>
          <h1 className="lg:text-[64px] text-base lg:leading-[80px] font-plusJakartaSans font-bold text-white">
            NGENE-NGENE WAE
          </h1>
          <p className="text-white font-semibold lg:leading-[30px] text-[7px] lg:text-[24px]">
            Harda Kiswaya, Calon Bupati Sleman 2025 - 2030
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
