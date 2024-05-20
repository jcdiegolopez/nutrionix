

import { capitalizeWords, fetchImageUrl } from "@/lib/utils";
import { IFood } from "@/types";
import Image from "next/image";
import Link from "next/link";


type CardProps = {
    food: IFood;
    added?: boolean;
}

const Card = async ( {
    food,
    added = false
} : CardProps) => {
    const imageUrl = await fetchImageUrl(`food ${food.name}`) || '/assets/icons/image-missing.jpg';

    
    

  return (
    <div className="group relative flex min-h-[380px] w-full 
    max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all
    hover:shadow-lg md:min-h[438px]">
        <Link href={`/foods/${food.id}`}
        style={{backgroundImage: `url(${imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"/>
           
        {(!added) && (
            <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                <Link href={`/food/${food.id}/update`}>
                    <Image src="/assets/icons/add.svg" alt="Edit" width={20} height={20}/>
                </Link>
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
            <Link href={`/foods/${food.id}`}> 
            <p className="p-medium-16 md:p-bold-20 line-clamp-2 flex-1 text-black">{capitalizeWords(food.name)}</p>
            </Link>
            
            <div className="flex-between w-full">
                <p className="p-medium-14 md:p-medium-16 text-grey-600">
                    {`${food.serving_size_g} grams`}
                </p>
                {/* {hasOrderLink && 
                <Link href={`orders?eventId=${event._id}`} className="flex gap-2">
                    <p className="text-primary-500">Order Details</p>
                    <Image src="/assets/icons/arrow.svg" alt="Search" width={10} height={10}/>   
                </Link>
                } */}
            </div>

        </div>
    </div>
  )
}

export default Card