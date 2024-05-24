import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'
import { RemoveUrlQueryParams, UrlQueryParams } from "@/types"
import axios from 'axios';
import { auth } from "@/auth";

const API_KEY = process.env.NEXT_PEXELS_API_KEY

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleError = (error: unknown) => {
    console.error(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
  }


  export function formUrlQuery({ params, key, value }: UrlQueryParams) {
    const currentUrl = qs.parse(params)
  
    currentUrl[key] = value
  
    return qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: currentUrl,
      },
      { skipNull: true }
    )
  }

  export function capitalizeWords(str: string) {
    if (typeof str !== 'string' || str.length === 0) {
      return '';
    }
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }


 

  export async function fetchImageUrl(query: string) {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        headers: {
          Authorization: API_KEY
        },
        params: {
          query: query,
          per_page: 1
        }
      });
  
      const imageUrl = response.data.photos[0]?.src.medium;
      return imageUrl;
    } catch (error) {
      console.error('Error fetching image from Pexels',error);
      return null;
    }
  }

  export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
    const currentUrl = qs.parse(params)
  
    keysToRemove.forEach(key => {
      delete currentUrl[key]
    })
  
    return qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: currentUrl,
      },
      { skipNull: true }
    )
  }

