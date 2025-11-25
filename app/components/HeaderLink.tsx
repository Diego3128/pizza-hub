import { headingFont } from "../config/fonts/fonts";
import { links as appLinks } from "../config/links/links";
import { LinkMenu } from "./header/LinkMenu";
import { Logo } from "./header/Logo";

export interface Link {
  id: number;
  label: string;
  url: string;
  icon: string;
}

const links: Link[] = [
  {
    id: 1,
    label: appLinks.home.label,
    icon: "home.svg",
    url: appLinks.home.url,
  },
  {
    id: 2,
    label: appLinks.menu.label,
    icon: "menu.svg",
    url: appLinks.menu.url,
  },
  {
    id: 3,
    label: appLinks.about.label,
    icon: "story.svg",
    url: appLinks.about.url,
  },
  {
    id: 4,
    label: appLinks.contact.label,
    icon: "phone.svg",
    url: appLinks.contact.url,
  },
];

export const Header = () => {
  return (
    <div
      className={`${headingFont.className} flex gap-3 justify-between items-center flex-wrap-reverse max-w-7xl mx-auto text-gray-200 font-bold`}
    >
      <LinkMenu links={links} />

      <Logo />

    </div>
  );
};
