import { Icon } from "@iconify/react";
import NewsItem from "../items/news.item";

const newsItems = [
  {
    title: "#HantamKiswaya #HarapanBaru #HarapanKita",
    date: "7 Agustus 2024",
    thumbnail: "/ig/1.jpg",
    link: "https://www.instagram.com/p/C-Xk594yGq6/",
  },
  {
    title: "#UMKMGirikerto #HardaKiswaya #Sleman",
    date: "8 Agustus 2024",
    thumbnail: "/ig/2.jpg",
    link: "https://www.instagram.com/p/C-abn9Mswiw/",
  },
  {
    title: "#PSS #Sleman #SuperElangJawa #HardaKiswaya",
    date: "7 Agustus 2024",
    thumbnail: "/ig/3.jpg",
    link: "https://www.instagram.com/p/C-VInY-I7j0/ ",
  },
  {
    title: "#HardaKiswaya #KalurahanSendangerejo #Minggir #GolongGilig #Sleman",
    date: "3 Agustus 2024",
    thumbnail: "/ig/4.jpg",
    link: "https://www.instagram.com/p/C-NRGvENIU5/",
  },
  {
    title: "#HardaKiswaya #HantamKiswaya #Sleman",
    date: "2 Agustus 2024",
    thumbnail: "/ig/5.jpg",
    link: "https://www.instagram.com/p/C-KzVBKpTuv/",
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
          <button className="gap-[5px] hidden">
            <p className="lg:text-base  text-[7px] font-semibold">
              Selengkapnya
            </p>
            <Icon
              icon="mingcute:arrow-right-fill"
              className="h-2 w-2 lg:h-6 lg:w-6 text-[#FDC61A]"
            />
          </button>
        </div>
        <div className="lg:mt-10 mt-[15px] flex flex-col lg:flex-row gap-[15px] lg:gap-[36px]">
          <div className="shrink-0">
            <NewsItem {...newsItems[0]} isHighlight />
          </div>
          <div className="flex flex-col lg:hidden gap-5">
            {newsItems.map((newsItem, idx) => {
              return idx > 0 && <NewsItem key={idx} {...newsItem} />;
            })}
          </div>
          <div className="hidden lg:grid w-full grid-cols-2 gap-5">
            {newsItems.map((newsItem, idx) => {
              return (
                idx > 0 && (
                  <div key={idx} className="w-full col-span-1">
                    <NewsItem key={idx} {...newsItem} />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
