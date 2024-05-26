'use client'
import { useEffect, useState } from 'react';
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import HealthFilter from "@/components/shared/HealthyFilter";
import ClassificationFilter from "@/components/shared/CategoryFilter";
import ProportionFilter from "@/components/shared/ProportionFilter";
import { Button } from '../ui/button';
import Link from 'next/link';
import { IFood } from '@/types';

/* The `MyFoods` function component is defining a React component that manages a list of food items
using the `useState` hook. */
const MyFoods = () => {
    const [foods, setFoods] = useState([]);

   /**
    * The `resetFood` function clears the `foods` state and updates the local storage with an empty
    * array.
    */
    const resetFood = () => {
        setFoods([]);
        window.localStorage.setItem('foods', JSON.stringify([]));
    }
    
    /* The `useEffect` hook in the provided code snippet is responsible for synchronizing the state of
    the `foods` array in the component with the data stored in the local storage. Here's a breakdown
    of what it does: */
    useEffect(() => {
        const storedFoods = window.localStorage.getItem('foods');
        if (storedFoods && JSON.stringify(foods) !== storedFoods) {
            setFoods(JSON.parse(storedFoods));
        }
    }, [foods]);
    
    /* The code snippet you provided is a React functional component named `MyFoods`. Here's a
    breakdown of what it does: */
    const totalCalories = Math.round(foods.map((food: IFood) => food.calories).reduce((a, b) => a + b, 0))
    return (
        <section id="foods" className="wrapper my-8 flex flex-col gap-8 md:12">
            <h2 className="h2-bold">Your Items<br/></h2>
            <div className="flex w-full flex-col gap-5 md:flex-row ">
                <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                <p
                    
                    className="p-bold-18 border-0 bg-gray-50 outline-offset-0 placeholder:text-gray-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {totalCalories} Calories Today
                </p>
                </div>
                <Button size={'lg'} onClick={resetFood} className="button w-full md:w-fit bg-malachite-600">
                       Reset Food!
                </Button>
            </div>
            <Collection data={foods} 
                emptyTitle={'No foods found'}
                emptyStateSubtext={'Select more foods!'}
                limit={6}
                page={1}
                totalPages={Math.ceil(foods.length / 20)}
                type='myfoods'
            />
        </section>
    )
}

export default MyFoods;