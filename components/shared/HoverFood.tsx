import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { IFood } from "@/types"
import { Button } from "@/components/ui/button";
import { capitalizeWords, fetchImageUrl } from "@/lib/utils";

type HoverFoodProps = {
  food: IFood;
}

const HoverFood = ({ food }: HoverFoodProps) => {
  return (
    <HoverCard openDelay={300} closeDelay={400}>
      <HoverCardTrigger className="cursor-pointer">
      <p className="p-medium-16 md:p-bold-20 line-clamp-2 flex-1 text-black hover:text-malachite-600 ">{capitalizeWords(food.name)}</p>
      </HoverCardTrigger>
      <HoverCardContent className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
        <div className="text-sm text-gray-600">
          <p>Calories: {food.calories}</p>
          <p>Serving Size: {food.serving_size_g} grams</p>
          <p>Protein: {food.protein_g} grams</p>
          <p>Fat: {food.fat_total_g} grams</p>
          <p>Sugar: {food.sugar_g} grams</p>
          <p>Fiber: {food.fiber_g} grams</p>
          <p>Cholesterol: {food.cholesterol_mg} mg</p>
          <p>Sodium: {food.sodium_mg} mg</p>
          <p>Potassium: {food.potassium_mg} mg</p>
          <p>Classification: {food.classification}</p>
          <p>Healthiness: {food.healthiness}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverFood
