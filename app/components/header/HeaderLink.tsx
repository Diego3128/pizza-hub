"use client";

import Link from "next/link";

interface Props {
  url: string;
  label: string;
}

export const HeaderLink = ({ label, url }: Props) => {
  return (
    <div className="nav-link">
      <Link href={url}>{label} </Link>
      <div className="underline"></div>
    </div>
  );
};
