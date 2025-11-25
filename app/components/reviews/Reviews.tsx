// come from the backend, duh!

import { Title } from "../elements/Title";
import { ReviewGrid } from "./ReviewGrid";

export interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
  imgUrl: string;
}

export const reviews = [
  {
    id: 1,
    name: "Laura Gómez",
    rating: 4.8,
    review:
      "The pizza was absolutely delicious! The crust had the perfect crunch, and the ingredients tasted super fresh. Will definitely order again.",
    date: "2024-11-02",
    imgUrl: "img-1.jpg",
  },
  {
    id: 3,
    name: "Mariana Silva",
    rating: 4.2,
    review:
      "Loved the Hawaiian pizza! Sweet and salty balance is *chef's kiss*. The only downside was the delivery time, but still worth it.",
    date: "2024-09-15",
    imgUrl: "img-2.jpg",
  },
  {
    id: 4,
    name: "Juan Hernández",
    rating: 3.9,
    review:
      "Good flavor, but my pizza arrived slightly warm, not hot. Still tasty though.",
    date: "2024-09-01",
    imgUrl: "img-3.jpg",
  },
  {
    id: 7,
    name: "Daniela Ruiz",
    rating: 4.7,
    review:
      "Super tasty pizzas! The BBQ Chicken pizza is my new favorite. Great portion size too.",
    date: "2024-06-30",
    imgUrl: "img-4.jpg",
  },
  {
    id: 8,
    name: "Miguel Ángel",
    rating: 4.0,
    review:
      "Very good pizza and fair prices. I wish they had more vegetarian options, though.",
    date: "2024-05-10",
    imgUrl: "img-5.jpg",
  },
  {
    id: 9,
    name: "Sofía Morales",
    rating: 4.9,
    review:
      "The Margherita pizza was absolutely perfect. Fresh basil, amazing sauce, and fantastic crust. Loved it!",
    date: "2024-04-03",
    imgUrl: "img-6.jpg",
  },
];

export const Reviews = () => {
  return (
    <section>
      <Title>Reviews</Title>
      <ReviewGrid reviews={reviews} />
    </section>
  );
};
