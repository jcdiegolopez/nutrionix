"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { classificationType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";


const ClassificationFilter = () => {
  const classifications : classificationType[] = ['Gain Weight', 'Weight Loss', 'Weight Maintenance']
  
  const router = useRouter();
  const searchParams = useSearchParams();

  

  /**
   * The function `onSelectClassification` updates the URL query parameters based on the selected
   * classification and navigates to the new URL using React Router.
   * @param {string} classification - Classification is a string that represents a category or type of
   * data. In the provided code snippet, the `onSelectClassification` function is used to update the
   * URL query parameters based on the selected classification. If the classification is not 'All', it
   * adds the classification as a query parameter to the URL.
   */
  const onSelectClassification = (classification: string) => {
      let newUrl = '';

      if(classification && classification !== 'All') {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'classification',
          value: classification
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['classification']
        })
      }

      router.push(newUrl, { scroll: false });
  }

  /* The `return` statement in the code snippet is rendering a JSX structure for a Select component
  used in a React application. Here's a breakdown of the JSX structure: */
  return (
    <Select onValueChange={(value: string) => onSelectClassification(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Classification" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>

        {classifications.map((classification, index) => (
          <SelectItem value={classification} key={index} className="select-item p-regular-14">
            {classification}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ClassificationFilter