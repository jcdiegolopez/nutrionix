import { IFood } from "@/types";
export function getSavedFoods(): IFood[] {
    try {    
        const data = localStorage.getItem('foods');
        if (data) {
            return JSON.parse(data) as IFood[];
        }
    } catch (error) {
        console.error('Error retrieving foods from local storage', error);
    }
    return [];
};

export function clearFoods() {
    localStorage.removeItem('foods');
    if (typeof window !== 'undefined') {
        localStorage.removeItem('foods');
    }
};
