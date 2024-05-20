import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchParamProps } from "@/types";
import { getAllFoods } from "@/lib/actions/food.actions";
import Collection from "@/components/shared/Collection";
import { classificationType, healthyType } from "@/types";
import Search from "@/components/shared/Search";
import HealthFilter from "@/components/shared/HealthyFilter";
import ClassificationFilter from "@/components/shared/CategoryFilter";



export default async function recommendations({searchParams}: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const classification = (searchParams?.classification as classificationType) || 'All';
  const health = (searchParams?.health as healthyType) || 'All';
  const foods = await getAllFoods({ limit: 6, page, classification: classification , query: searchText, healthy: health});
  console.log(foods);
  return (
    <>
      <section id="foods" className="wrapper my-8 flex flex-col gap-8 md:12">
        <h2 className="h2-bold">Mas De Mil <br/>  Recetas Para Elegir...</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row ">
          <Search placeholder="Search foods..." />
          <HealthFilter />
          <ClassificationFilter />
        </div>
        <Collection data={foods?.data} 
        emptyTitle={'No foods found'}
        emptyStateSubtext={'Come back later'}
        limit={20}
        page={page}
        totalPages={foods?.totalPages}
        />
      </section>
    </>
  );
}
