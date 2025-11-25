"use client";

import { headingFont } from "@/app/config/fonts/fonts";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Title = ({ level = 1, children }: TitleProps) => {
  const Tag = `h${level}` as const;
  return <Tag className={` text-gray-200 text-3xl md:text-4xl mb-16 text-center text-pretty ${headingFont.className}`}>{children}</Tag>;
};
