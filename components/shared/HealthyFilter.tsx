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


/* The `HealthFilter` function component is defining a React component that represents a health filter
dropdown. Here's a breakdown of what each part of the code is doing: */
const HealthFilter = () => {
    const healths: healthyType[] = ['Healthy', 'Unhealthy']
  const router = useRouter();
  const searchParams = useSearchParams();

  

  /**
   * The `onSelectHealth` function updates the URL query parameters based on the selected health option
   * and navigates to the new URL using React Router.
   * @param {string} health - The `health` parameter in the `onSelectHealth` function is a string that
   * represents the selected health option. It is used to update the URL query parameters based on the
   * selected health option. If the selected health is not 'All', it is added to the URL query
   * parameters. If the selected
   */
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

  /* The `return` statement in the `HealthFilter` function component is rendering JSX elements that
  represent a dropdown select component. Here's a breakdown of what each part of the JSX code is
  doing: */
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