"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { proportionType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";


const ProportionFilter = () => {
  const proportions : proportionType[] = ["1/3","1/4","1/5","1/6","1/7","1/8"]
  
  const router = useRouter();
  const searchParams = useSearchParams();



  const onSelectClassification = (proportion: string) => {
      let newUrl = '';

      if(proportion && proportion !== 'All') {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'proportion',
          value: proportion
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['proportion']
        })
      }

      router.push(newUrl, { scroll: false });
  }

  return (
    <Select onValueChange={(value: string) => onSelectClassification(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Proportion" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Any" className="select-item p-regular-14">Any</SelectItem>
        {proportions.map((proportion, index) => (
          <SelectItem value={proportion} key={index} className="select-item p-regular-14">
            {proportion}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ProportionFilter