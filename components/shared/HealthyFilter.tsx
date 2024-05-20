"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { healthyType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";


const HealthFilter = () => {
    const healths: healthyType[] = ['Healthy', 'Unhealthy']
  const router = useRouter();
  const searchParams = useSearchParams();

  

  const onSelectHealth = (health: string) => {
      let newUrl = '';

      if(health && health !== 'All') {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'health',
          value: health
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['health']
        })
      }

      router.push(newUrl, { scroll: false });
  }

  return (
    <Select onValueChange={(value: string) => onSelectHealth(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Health" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>

        {healths.map((health, index) => (
          <SelectItem value={health} key={index} className="select-item p-regular-14">
            {health}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default HealthFilter