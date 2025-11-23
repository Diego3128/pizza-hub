import { geistSans } from "../config/fonts/fonts";
import { popularFoods } from "../config/data/popularFoods";
import { PopularFoodGrid } from "./popular/PopularFoodGrid";
import { Title } from "./elements/Title";

export const Popular = () => {
  return (
    <div className={`${geistSans.className}`}>
      <Title level={2}>Trendy now</Title>
      <PopularFoodGrid foods={popularFoods} />
    </div>
  );
};
