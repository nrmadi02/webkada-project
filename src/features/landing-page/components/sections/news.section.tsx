import { Icon } from "@iconify/react";
import NewsItem from "../items/news.item";

const newsItems = [
  {
    title:
      "Pembukaan Pameran Tunggal Herman Ong Journey To A Thousand Expressions oleh Harda Kiswaya",
    date: "14 Juli 2024",
    thumbnail: "/images/news-1.png",
  },
  {
    title: "Ngiras : Menikmati Kelezatan Bakmi Pak Mo Tempel Bersama Pak Harda",
    date: "11 Juli 2024",
    thumbnail: "/images/news-2.png",
  },
  {
    title: "Merti Dusun sebagai Rasa Syukur Warga Gebang Kalurahan Wedomartani",
    date: "10 Juli 2024",
    thumbnail: "/images/news-3.png",
  },
  {
    title:
      "DPD Partai Gerindra resmi menyerahkan Surat Tugas kepada Harda Kiswaya",
    date: "9 Juli 2024",
    thumbnail: "/images/news-4.png",
  },
  {
    title:
      "Harda Kiswaya Bersilaturahmi dengan Pimpinan Cabang Muhammadiyah (PCM) Gamping",
    date: "23 Juni 2024",
    thumbnail: "/images/news-5.png",
  },
];

const NewsSection = () => {
  return (
    <section className="relative" id="berita">
      <div className="md:container px-5 pb-9  lg:pb-[170px]">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-plusJakartaSans font-bold text-base lg:text-[40px] text-neutral-900">
              Sorotan Terkini
            </h1>
            <div className="lg:h-[5px] h-[3px] w-[30px] lg:w-[50px] bg-[#FDC61A]" />
          </div>
          <button className="flex gap-[5px]">
            <p className="lg:text-base text-[7px] font-semibold">
              Selengkapnya
            </p>
            <Icon
              icon="mingcute:arrow-right-fill"
              className="h-2 w-2 lg:h-6 lg:w-6 text-[#FDC61A]"
            />
          </button>
        </div>
        <div className="lg:mt-10 mt-[15px] flex flex-col lg:flex-row gap-[15px] lg:gap-[29px]">
          <div className="lg:w-[583px] w-full shrink-0">
            <NewsItem {...newsItems[0]} isHighlight />
          </div>
          <div className="flex flex-col gap-5">
            {newsItems.map((newsItem, idx) => {
              return idx > 0 && <NewsItem key={idx} {...newsItem} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
