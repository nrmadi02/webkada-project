import { LinkProps } from "next/link";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

type AnchorProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <Link {...props} scroll={false} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
