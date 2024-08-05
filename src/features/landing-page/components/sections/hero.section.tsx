const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-cover lg:bg-[url('/images/bg-hero.webp')] bg-[url('/images/bg-hero-mobile.png')] h-[555px] lg:h-full w-full"
    >
      <div className="md:container px-5 py-[50px] pt-[65px] lg:pt-[190px] lg:pb-[282px]">
        <div className="lg:hidden">
          <p className="w-[148px] text-[32px] font-bold leading-[40px] text-white">
            UNTUK SLEMAN BEN ORA NGENE NGENE WAE
          </p>
          <p className="mt-[25px] text-white text-[10px] font-[500] w-[195px]">Harda Kiswaya, Calon Bupati Sleman 2025-2030</p>
        </div>
        <div className="lg:flex flex-col gap-[6px] hidden lg:gap-0">
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
