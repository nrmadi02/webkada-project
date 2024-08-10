import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NewsItemProps {
  isHighlight?: boolean;
  title: string;
  date: string;
  thumbnail: string;
  link: string;
}

const NewsItem = (props: NewsItemProps) => {
  const { isHighlight } = props;
  return (
    <div
      className={cn(
        "flex lg:gap-[14px] gap-[7px] flex-col w-full lg:max-w-[360px]",
        !isHighlight && "flex-row gap-[15px] lg:gap-[29px] items-center"
      )}
    >
      <Link href={props.link} target="_blank">
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={600}
          height={316}
          className={cn(
            "w-full object-cover h-[316px] rounded-[8px] lg:max-w-[360px] lg:h-[360px]",
            !isHighlight &&
              "min-w-[123px] shrink-0 h-[123px] lg:min-w-[200px] lg:h-[200px]"
          )}
        />
      </Link>
      <div
        className={cn(
          "flex flex-col gap-[5px] lg:gap-[14px]",
          !isHighlight && "lg:gap-[10px] gap-[5px]"
        )}
      >
        <p
          className={cn(
            "lg:text-base text-[9px] font-semibold text-neutral-600",
            !isHighlight && "lg:text-sm text-[11px]"
          )}
        >
          {props.date}
        </p>
        <Link href={props.link} target="_blank">
          <p
            className={cn(
              "lg:text-2xl text-base font-semibold text-neutral-900",
              !isHighlight && "lg:text-base text-[11px]"
            )}
          >
            {props.title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
