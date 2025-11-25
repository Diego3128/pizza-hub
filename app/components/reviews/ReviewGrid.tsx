"use client";

import { Review } from "./Reviews";
import { ReviewCard } from "./ReviewCard";

interface Props {
  reviews: Review[];
}

export const ReviewGrid = ({ reviews }: Props) => {
  return (
    <div className="grid gap-y-6 md:gap-x-6.5 lg:gap-x-9 md:grid-cols-2 w-11/12 lg:max-w-7xl mx-auto">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
