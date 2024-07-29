import { cn } from "@/lib/utils";
import Image from "next/image";

interface NewsItemProps {
  isHighlight?: boolean;
  title: string;
  date: string;
  thumbnail: string;
}

const NewsItem = (props: NewsItemProps) => {
  const { isHighlight } = props;
  return (
    <div
      className={cn(
        "flex lg:gap-[14px] gap-[7px] flex-col w-full",
        !isHighlight && "flex-row gap-[15px] lg:gap-[29px] items-center"
      )}
    >
      <Image
        src={props.thumbnail}
        alt={props.title}
        width={600}
        height={400}
        className={cn(
          "w-full object-cover rounded-[8px]",
          !isHighlight && "w-[123px] lg:w-[184px]"
        )}
      />
      <div className={cn("flex flex-col gap-[5px] lg:gap-[14px]", !isHighlight && "lg:gap-[10px] gap-[5px]")}>
        <p
          className={cn(
            "lg:text-base text-[9px] font-semibold text-neutral-600",
            !isHighlight && "lg:text-sm text-[11px]"
          )}
        >
          {props.date}
        </p>
        <p className={cn("lg:text-2xl text-base font-semibold text-neutral-900", !isHighlight && "lg:text-base text-[11px]")}>
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
