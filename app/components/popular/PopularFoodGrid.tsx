import { type PopularFood } from "@/app/config/data/popularFoods";
import { FoodGridElement } from "./FoodGridElement";

interface Props {
  foods: PopularFood[];
}
export const PopularFoodGrid = ({ foods }: Props) => {
  // IMPORTANT, GRID APPLIES > LG (1024px)
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-4 sm:gap-x-3.5 sm:gap-y-6 justify-center items-center popular-grid">
        {foods.map((food) => {
          return <FoodGridElement key={food.name} food={food} />;
        })}
      </div>
    </div>
  );
};
