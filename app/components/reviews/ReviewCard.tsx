"use client";

import Image from "next/image";
import { Review } from "./Reviews";
import { MdStar } from "react-icons/md";

interface Props {
  review: Review;
}
export const ReviewCard = ({ review }: Props) => {
  return (
    <div
      className="grid grid-cols-[30%_70%] gap-3 rounded-bl-2xl rounded-tr-3xl bg-neutral-950 px-2 py-5 animate-shadow transition-all active:scale-105 hover:scale-105 duration-300"
    >
      <div className="flex justify-center items-center p-2 md:p-4 rounded-bl-2xl rounded-tr-3xl border-2 border-neutral-900">
        {/* img */}
        <Image
          className="w-full aspect-square object-cover rounded-bl-2xl rounded-tr-3xl"
          height={100}
          width={100}
          src={`/images/reviews/${review.imgUrl}`}
          alt={`review's picture from ${review.name}`}
        />
      </div>
      <div className="grid text-slate-300 pr-4 @container">
        {/* control the font size with container queries */}
        <p className="text-lg @xs:text-xl">{review.name}</p>
        <p className="-translate-y-2 text-xs @xs:text-sm text-slate-200/70">
          {review.date}
        </p>
        <div className="flex gap-2">
          <MdStar className="text-amber-500 size-6" />
          <span>{review.rating}</span>
        </div>
        <p className="text-pretty text-sm @xs:text-[16px]">{review.review}</p>
      </div>
    </div>
  );
};
