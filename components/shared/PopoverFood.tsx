import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { capitalizeWords } from "@/lib/utils"
import { IFood } from "@/types"
  


/* This code defines a functional component called `PopoverFood` in TypeScript React. The component
takes two props: `food` of type `IFood` and `added` of type `boolean`. */
const PopoverFood = ({ food, added}: {food: IFood, added:boolean}) => {
  return (
    <Popover >
      <PopoverTrigger >
        <div className={`absolute ${added ? 'right-2' : 'right-12'} top-2 flex flex-col gap-4 rounded-xl bg-white p-1 shadow-sm transition-all`}>
        <div 
                title="Nutritional info"
                className="group cursor-pointer outline-none hover:scale-110 duration-300"
            >
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="#1C274C"/>
            <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" fill="#1C274C"/>
            </svg>   
        </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white rounded-lg shadow-lg">
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
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFood