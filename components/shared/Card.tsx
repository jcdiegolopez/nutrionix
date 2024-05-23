"use client";
import { capitalizeWords, fetchImageUrl } from "@/lib/utils";
import { IFood } from "@/types";
import Image from "next/image";
import Link from "next/link";
import HoverFood from "./HoverFood";
import { useEffect } from "react";
import { getSavedFoods, clearFoods } from "@/lib/localUtils";

type CardProps = {
    food: IFood;
    added?: boolean;
}

const Card = async ({
    food,
    added = false
}: CardProps) => {
    const imageUrl = await fetchImageUrl(`food ${food.name}`) || '/assets/icons/image-missing.jpg';

    const handleAddNew = () => {
        try {
            const existingFoods = getSavedFoods();
            const newFoods = [...existingFoods, food];
            localStorage.setItem('foods', JSON.stringify(newFoods));
            alert(localStorage.getItem('foods'));
        } catch (error) {
            console.error('Error saving food to local storage', error);
        }
    };

    return (
        <div className="group relative flex min-h-[380px] w-full 
        max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all
        hover:shadow-lg md:min-h[438px]">
            <Link href={`/foods/${food.id}`}
            style={{backgroundImage: `url(${imageUrl})`}}
            className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"/>
            
            {(!added) && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-1 shadow-sm transition-all">
                    <button onClick={handleAddNew}
                    title="Add New"
                    className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        className="stroke-zinc-500 fill-none hover:fill-zinc-300 active:stroke-malachite-500 active:fill-malachite-100 active:duration-0 duration-300"
                    >
                        <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                    </svg>
                    </button>
                </div>
            )}
            
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
                
                
                
                <HoverFood food={food}/>
                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        {`${food.serving_size_g} grams`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
