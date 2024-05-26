"use client";
import { capitalizeWords } from "@/lib/utils";
import { fetchImageUrl } from "@/lib/serverUtils";
import { IFood } from "@/types";
import Image from "next/image";
import Link from "next/link";
import HoverFood from "./HoverFood";
import { useEffect, useState } from "react";
import { getSavedFoods, clearFoods } from "@/lib/localUtils";
import PopoverFood from "./PopoverFood";

/**
 * The type `CardProps` in TypeScript React represents the props expected by a Card component,
 * including a `food` object of type `IFood` and an optional `added` boolean flag.
 * @property {IFood} food - The `food` property in the `CardProps` type represents an object of type
 * `IFood`. It is likely used to store information about a food item that will be displayed in a card
 * component.
 * @property {boolean} added - The `added` property in the `CardProps` type is optional, meaning it may
 * or may not be present when creating an object of type `CardProps`. If it is present, it should be a
 * boolean value indicating whether the food item has been added or not.
 */
type CardProps = {
    food: IFood;
    added?: boolean;
}

/* The `const Card = ({ food, added = false }: CardProps) => { ... }` syntax in the code snippet is
defining a functional React component named `Card` that takes in two props: `food` of type `IFood`
and `added` of type `boolean` with a default value of `false`. */
const Card = ({
    food,
    added = false
}: CardProps) => {
    const [imageUrl, setImageUrl] = useState('/assets/icons/image-missing.jpg');

    useEffect(() => {

        const fetchImage = async () => {
            
            try {
                
                const url = await fetchImageUrl(`food ${food.name}`);
                console.log(url);
                setImageUrl(url || '/assets/icons/image-missing.jpg');
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        };
        
        fetchImage();
    }, [food.name]);

    /**
     * The `handleAddNew` function adds a new food item to the existing list of foods stored in local
     * storage.
     */
    const handleAddNew = () => {
        try {
            const existingFoods = getSavedFoods();
            const newFoods = [...existingFoods, food];
            localStorage.setItem('foods', JSON.stringify(newFoods));
            
        } catch (error) {
            console.error('Error saving food to local storage', error);
        }
    };

    /* The `return` statement in the code snippet you provided is returning JSX elements that define
    the structure and content of a React component called `Card`. Here's a breakdown of what the JSX
    elements are doing: */
    return (
        <div className="group relative flex min-h-[380px] w-full 
        max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all
        hover:shadow-lg md:min-h[438px]">
            
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" />
    
            {(!added) && (
                <>
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-1 shadow-sm transition-all">
                    <button onClick={handleAddNew}
                        title="Add New"
                        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            className="stroke-zinc-500 fill-none hover:fill-zinc-300 active:stroke-malachite-500 active:fill-malachite-100 active:duration-0 duration-300"
                        >
                            <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                strokeWidth="1.5"
                            ></path>
                            <path d="M8 12H16" strokeWidth="1.5"></path>
                            <path d="M12 16V8" strokeWidth="1.5"></path>
                        </svg>
                    </button>
                </div>
                
                </>
            )}
            <PopoverFood food={food} added={added}/>
            <div className="flex min-h-[230px] 
            flex-col gap-3 p-5 md:gap-4">
                <div className="flex gap-2">
                    <span className="line-clamp-1 p-semibold-14 overflow-hidden rounded-full bg-green-100 px-4 py-1 text-green-60"> {food.classification} </span>
                    <p className="line-clamp-1 overflow-hidden p-semibold-14  w-max rounded-full bg-gray-500/10 px-4 py-1 text-grey-500">
                        {food.healthiness}
                    </p>
                </div>
                <p className="p-medium-16  text-grey-500">
                    {` ${food.calories} Calories`}
                </p>
                <HoverFood food={food} />
                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        {`${food.serving_size_g} grams`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
