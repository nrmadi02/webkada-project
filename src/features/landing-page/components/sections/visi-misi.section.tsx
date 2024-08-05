import Image from "next/image";
import { VisiMisiItem } from "../items/visi-misi.item";
import { VisiMisiMobileItem } from "../items/visi-misi-mobile.item";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState<{
    [key: number]: boolean;
  }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const itemHidden = Object.values(isHovered).some((value) => value);

  return (
    <section id="visi-misi">
      <div className="lg:pr-[70px] flex justify-between items-center pb-[30px]">
        <div className="hidden lg:block">
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
          className="w-[144px] hidden lg:block h-[175px] lg:w-[443px] lg:h-[563px]"
        />
        <div className="w-full bg-cover relative h-full min-h-[555px] lg:hidden bg-[url('/images/harda-visi-misi.png')]">
          <div className="lg:hidden w-full right-0 left-0 absolute bottom-0 h-[300px]">
            {!itemHidden ? (
              <>
                {visiMisiItems.map((visiMisiItem, idx) => (
                  <VisiMisiMobileItem
                    key={idx}
                    title={visiMisiItem.title}
                    description={visiMisiItem.description}
                    isHovered={isHovered[idx]}
                    setIsHovered={(e) => {
                      setIsHovered({ ...isHovered, [idx]: e });
                    }}
                  />
                ))}
              </>
            ) : (
              <>
                <VisiMisiMobileItem
                  title={
                    visiMisiItems[Object.values(isHovered).indexOf(true)].title
                  }
                  description={
                    visiMisiItems[Object.values(isHovered).indexOf(true)]
                      .description
                  }
                  isHovered={isHovered[Object.values(isHovered).indexOf(true)]}
                  setIsHovered={(e) => {
                    setIsHovered({
                      ...isHovered,
                      [Object.values(isHovered).indexOf(true)]: e,
                    });
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
