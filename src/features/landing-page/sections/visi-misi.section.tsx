import Image from "next/image";
import { VisiMisiItem } from "../items/visi-misi.item";

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
    <section>
      <div className="pr-[70px] flex justify-between items-center pb-[30px]">
        <div>
          {visiMisiItems.map((visiMisiItem, idx) => (
            <VisiMisiItem
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
          className="w-[443px] h-[563px]"
        />
      </div>
    </section>
  );
};
