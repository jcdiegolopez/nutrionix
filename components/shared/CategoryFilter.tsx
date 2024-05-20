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