
import { IFood } from "@/types";
import Card from "./Card";
import Pagination from "./Pagination";
import { Suspense } from "react";

/**
 * The type `CollectionProps` defines props for a collection component in a TypeScript React
 * application.
 * @property {IFood[]} data - An array of objects of type IFood.
 * @property {string} emptyTitle - The `emptyTitle` property in the `CollectionProps` type represents
 * the title to be displayed when the collection of data is empty.
 * @property {string} emptyStateSubtext - The `emptyStateSubtext` property in the `CollectionProps`
 * type represents the subtext or additional information displayed when the collection of data is
 * empty. It provides context or guidance to the user when there are no items to display in the
 * collection.
 * @property {number | string} page - The `page` property in the `CollectionProps` type represents the
 * current page number of the collection being displayed. It can be either a number or a string.
 * @property {number} totalPages - The `totalPages` property in the `CollectionProps` type represents
 * the total number of pages available for the collection of data. It is an optional property,
 * indicated by the `?` symbol, which means it may or may not be present in the object of type
 * `CollectionProps`.
 * @property {string} urlParamName - The `urlParamName` property in the `CollectionProps` type is an
 * optional string property that represents the name of the URL parameter used for pagination.
 * @property {number} limit - The `limit` property in the `CollectionProps` type specifies the maximum
 * number of items that can be displayed on a single page in a collection or list. It helps in
 * controlling the pagination and limiting the number of items fetched or displayed at a time.
 * @property {string} type - The `CollectionProps` type includes the following properties:
 */
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

/* The `Collection` function is a React functional component that takes in props defined by the
`CollectionProps` type. Here's a breakdown of what the function does: */
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