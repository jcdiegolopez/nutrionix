'use client'
import { useEffect, useState } from 'react';
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import HealthFilter from "@/components/shared/HealthyFilter";
import ClassificationFilter from "@/components/shared/CategoryFilter";
import ProportionFilter from "@/components/shared/ProportionFilter";

const MyFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const storedFoods = window.localStorage.getItem('foods');
        if (storedFoods && JSON.stringify(foods) !== storedFoods) {
            setFoods(JSON.parse(storedFoods));
        }
    }, [foods]);

    return (
        <section id="foods" className="wrapper my-8 flex flex-col gap-8 md:12">
            <h2 className="h2-bold">Your Items<br/></h2>
            <div className="flex w-full flex-col gap-5 md:flex-row ">
                <Search placeholder="Search foods..." />
                <HealthFilter />
                <ClassificationFilter />
                <ProportionFilter />
            </div>
            <Collection data={foods} 
                emptyTitle={'No foods found'}
                emptyStateSubtext={'Come back later'}
                limit={20}
                page={1}
                totalPages={Math.ceil(foods.length / 20)}
            />
        </section>
    )
}

export default MyFoods;