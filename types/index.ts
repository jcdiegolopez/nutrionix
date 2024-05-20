

export type createUserParams = {
    name: string;
    email: string;
    username: string;
    password: string;
}

export type signInParams = {
    email: string;
    password: string;
}

export type IFood = {
    id: string;
    sodium_mg: number;
    cholesterol_mg: number;
    fiber_g: number;
    calories: number;
    fat_saturated_g: number;
    classification: "Weight Loss" | "Gain Weight" | "Weight Maintenance";
    healthiness: "Healthy" | "Unhealthy";
    sugar_g: number;
    fat_total_g: number;
    protein_g: number;
    name: string;
    serving_size_g: number;
    carbohydrates_total_g: number;
    potassium_mg: number;
}

export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
  }

  export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

  export type GetAllFoodsParams = {
    query: string;
    healthy: "Healthy" | "Unhealthy" | "All";
    classification: | "Weight Loss" | "Gain Weight" | "Weight Maintenance" | "All";
    limit: number;
    page: number;
  }

export type classificationType = "Weight Loss" | "Gain Weight" | "Weight Maintenance" | "All";
export type healthyType = "Healthy" | "Unhealthy" | "All";

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}