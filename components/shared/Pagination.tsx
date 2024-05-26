'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";


/**
 * The PaginationProps type defines props for a pagination component in TypeScript React.
 * @property {number | string} page - The `page` property in the `PaginationProps` type represents the
 * current page number or page identifier. It can be either a number or a string, allowing flexibility
 * in how the page is identified or referenced.
 * @property {number} totalPages - The `totalPages` property in the `PaginationProps` type represents
 * the total number of pages available for pagination. This value indicates the maximum number of pages
 * that can be navigated through when displaying a list of items that require pagination.
 * @property {string} urlParamName - The `urlParamName` property in the `PaginationProps` type
 * represents the name of the URL parameter that is used to specify the current page number in a
 * paginated list. It is an optional property, meaning it does not have to be provided when using the
 * `PaginationProps` type. If
 */
type PaginationProps = {
    page: number | string;
    totalPages: number;
    urlParamName?: string;
}

/* The `Pagination` function is a React component that handles pagination functionality. Here's a
breakdown of what it does: */
/* The `Pagination` function is a React component that handles pagination functionality. Here's a
breakdown of what it does: */
const Pagination = ({ page, totalPages, urlParamName} : PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onClick = (btnType: string) => {
        const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1; 
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: urlParamName || 'page',
            value: pageValue.toString()
        });

        router.push(newUrl, { scroll: false })
    }

  return (
    <div className="flex gap-2">
        <Button size={'lg'} variant={'outline'} className="w-28" onClick={() => onClick('prev')}
        disabled={Number(page) <=1 }>
            Previous
        </Button>
        <Button size={'lg'} variant={'outline'} className="w-28" onClick={() => onClick('next')}
        disabled={Number(page) >= totalPages }>
            Next
        </Button>
        
    </div>
  )
}

export default Pagination