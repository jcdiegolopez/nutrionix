"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

/* The `Search` component is a functional component in TypeScript React that takes an optional
`placeholder` prop with a default value of `'Search title...'`. Inside the component function, it
initializes three variables using React hooks: */
const Search = ({ placeholder = 'Search title...' }: { placeholder?: string }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  /* This `useEffect` hook in the `Search` component is responsible for handling the search
  functionality with a debounce mechanism. Here's a breakdown of what it does: */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if(query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, { scroll: false });
    }, 300)

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router])

 /* The `return` statement in the `Search` component is responsible for rendering the JSX (JavaScript
 XML) markup that represents the visual output of the component. In this case, the `return` block is
 returning a `div` element with specific styling and child components: */
  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
      <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
      <Input 
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-gray-50 outline-offset-0 placeholder:text-gray-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default Search