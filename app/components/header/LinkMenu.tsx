"use client";
import { useEffect, useState } from "react";
import { Link } from "../HeaderLink";
import { HeaderLink } from "./HeaderLink";
import { BurguerMenu } from "./BurguerMenu";

export const LinkMenu = ({ links }: { links: Link[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);
  const showLargeMenu = screenWidth > 400;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateWidth = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth(); //init on mount

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      {/* xs < make burguer-context menu on small devices */}
      <div className="relative flex items-center justify-center">
        <button className="xs:hidden" onClick={toggleMenu}>
          <BurguerMenu isMenuOpen={isMenuOpen} />
        </button>

        {!showLargeMenu && (
          <ul
            className={`absolute top-10 left-6 flex flex-col gap-6 font-normal bg-slate-950 py-7 px-5 rounded-xl shadow-xl shadow-slate-950 transition-transform duration-300 z-10 border-2 border-slate-900 ${
              isMenuOpen ? "scale-100" : "scale-0"
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <HeaderLink label={link.label} url={link.url} />
              </li>
            ))}
          </ul>
        )}
        {/* bigger screens */}

        {showLargeMenu && (
          <ul
            className={`flex gap-4 font-normal 
            `}
          >
            {links.map((link) => (
              <li
                key={link.id}
              >
                <HeaderLink label={link.label} url={link.url} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
