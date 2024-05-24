
import { IFood } from "@/types";
import Card from "./Card";
import Pagination from "./Pagination";
import { Suspense } from "react";

type CollectionProps = {
  data: IFood[];
  emptyTitle: string;
  emptyStateSubtext: string;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  limit: number;
  type?:string;


}

const Collection = ({
  data,emptyTitle,emptyStateSubtext, page, totalPages = 0, urlParamName, limit, type
  }: CollectionProps) => {
  return (
    <>
      {data?.length > 0 ? 
      ( <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((food) => {
            const added = type == 'myfoods'
            

            return (
            <li key={food.id} className="flex justify-center">
                <Card food={food} added={added} />
            </li>
            );
          })}
        </ul>

        { totalPages > 1 && (
        <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages}/>
        )}
      </div>) : 
      (<div className="flex-center wrapper min-h[200px] 
      w-full flex-col gap-3 rouded-[14px] bg-grey-50 py-28 text-center">
        <h3 className="p-bold-20 md:h5-bold">
          {emptyTitle}
        </h3>
        <p className="p-regular-14">
          {emptyStateSubtext}
        </p>
      </div>)}
    </>
  )
}

export default Collection