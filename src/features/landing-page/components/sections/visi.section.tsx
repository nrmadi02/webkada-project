import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    content: (
      <div className="text-center w-full font-bold font-plusJakartaSans text-[42px] lg:text-[54px] lg:leading-[68px] leading-[52px] text-neutral-900">
        “Menuju Sleman yang aman, nyaman, sejahtera, dan berbudaya tahun 2029”
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="text-center lg:text-[24px] lg:leading-[29px] font-semibold text-neutral-900 text-base">
        Sebagai calon Bupati Sleman 2025-2029, saya memiliki cita-cita untuk
        mewujudkan Kabupaten Sleman menjadi daerah yang aman, yaitu daerah yang
        bebas dari konflik SARA dan memiliki tingkat kriminalitas yang rendah.
        Kabupaten Sleman juga harus menjadi tempat bermukim yang nyaman bagi
        semua orang. Lingkungannya harus bersih dan rapi, serta masyarakatnya
        yang multikultural mampu menjaga toleransi dan semangat gotong royong.
        Kesejahteraan masyarakat harus ditingkatkan baik dari aspek sosial
        maupun ekonomi.
      </div>
    ),
  },
];

const VisiSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative" id="visi-misi">
      <div className="md:container px-5 py-[63px] lg:py-[90px]">
        {cards.map((item, index) => {
          return (
            index === currentCard && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentCard === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                {item.content}
              </motion.div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default VisiSection;
