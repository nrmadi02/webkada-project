import Image from "next/image";
import { VisiMisiItem } from "../items/visi-misi.item";
import { VisiMisiMobileItem } from "../items/visi-misi-mobile.item";

const visiMisiItems = [
  {
    title: "Visi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis.",
  },
  {
    title: "Misi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis.",
  },
  {
    title: "Misi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis.",
  },
  {
    title: "Misi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis.",
  },
  {
    title: "Misi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis.",
  },
];

export const VisiMisiSection = () => {
  return (
    <section id="visi-misi">
      <div className="lg:pr-[70px] pr-5 flex justify-between items-center pb-[30px]">
        <div className="hidden lg:block">
          {visiMisiItems.map((visiMisiItem, idx) => (
            <VisiMisiItem
              key={idx}
              title={visiMisiItem.title}
              description={visiMisiItem.description}
            />
          ))}
        </div>
        <div className="block lg:hidden relative h-[175px]">
          {visiMisiItems.map((visiMisiItem, idx) => (
            <VisiMisiMobileItem
              key={idx}
              title={visiMisiItem.title}
              description={visiMisiItem.description}
            />
          ))}
        </div>
        <Image
          src="/images/harda-image.svg"
          alt="visi-misi"
          width={443}
          height={563}
          className="w-[144px] h-[175px] lg:w-[443px] lg:h-[563px]"
        />
      </div>
    </section>
  );
};
