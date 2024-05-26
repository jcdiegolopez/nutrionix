"use server"
import axios from 'axios';
const API_KEY = process.env.NEXT_PEXELS_API_KEY

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
  