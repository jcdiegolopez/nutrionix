import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchParamProps } from "@/types";
import { getAllFoods } from "@/lib/actions/food.actions";
import Collection from "@/components/shared/Collection";
import { classificationType, healthyType } from "@/types";

export default async function Home({searchParams}: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const classification = (searchParams?.classification as classificationType) || 'All';
  const healthy = (searchParams?.health as healthyType) || 'All';
  const foods = await getAllFoods({ limit: 6, page, classification: classification , query: searchText, healthy: healthy});
  console.log(foods);
  return (
    <>
      <section className="bg-gray-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Busca, encuentra y elige la mejor comida para ti!</h1>
            <p className="p-regular-20 md:p-regular-24">Elige entre las mas de 4000+ opciones de comidas
            que tenemos para ti. </p>
            <Button asChild size={'lg'} className="button w-full md:w-fit bg-malachite-600">
              <Link href={'#foods'}>
                Comienza!
              </Link>
            </Button>
          </div>
          <Image src="/assets/images/banner.png" alt="Banner" width={1000} height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] drop-shadow-custom" /> 
        </div>
      </section>
      <section id="foods" className="wrapper my-8 flex flex-col gap-8 md:12">
        <h2 className="h2-bold">Mas De Mil <br/>  Recetas Para Elegir...</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row ">
          {/* <Search placeholder="Search events..." />
          <CategoryFilter /> */}
        </div>
        <Collection data={foods?.data} 
        emptyTitle={'No foods found'}
        emptyStateSubtext={'Come back later'}
        limit={6}
        page={page}
        totalPages={foods?.totalPages}
        />
      </section>
    </>
  );
}
