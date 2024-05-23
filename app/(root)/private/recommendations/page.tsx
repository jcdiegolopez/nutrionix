import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchParamProps, UserCa } from "@/types";
import { getAllFoods } from "@/lib/actions/food.actions";
import Collection from "@/components/shared/Collection";
import { classificationType, healthyType } from "@/types";
import Search from "@/components/shared/Search";
import HealthFilter from "@/components/shared/HealthyFilter";
import ClassificationFilter from "@/components/shared/CategoryFilter";
import { auth } from "@/auth";
import ProportionFilter from "@/components/shared/ProportionFilter";



export default async function recommendations({searchParams}: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const user = (await auth())?.user as UserCa;
  if (!user.email) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  if (!user.objective) {
    return {
      redirect: {
        destination: '/private/profile',
        permanent: false,
      },
    };
  }
  let calorias = 0;
  
  if (user.gender == "Male"){
    calorias = 66.5 + (13.75 * (user.weight ?? 0)) + (5.003 * (user.height ?? 0)) - (6.75 * (user.age ?? 0))
  } else {
    calorias = 66.5 + (9.563 * (user.weight ?? 0)) + (1.850 * (user.height ?? 0)) - (4.676 * (user.age ?? 0))
  }

  let clasificacion = '';
  if (user.objective === "Gain Weight") {
    clasificacion = "Gain Weight";
  } else if (user.objective === "Maintain Weight") {
    clasificacion = "Weight Maintenance";
  } else if (user.objective === "Lose Weight") {
    clasificacion = "Weight Loss";
  }
  let proportionWanted = searchParams?.proportion as string || 'Any';
  const searchText = (searchParams?.query as string) || '';
  const classification = (searchParams?.classification as classificationType) || clasificacion;
  const health = (searchParams?.health as healthyType) || 'All';

  let proporcionNashe = 0;
  let caloriesWanted = undefined;
  if (proportionWanted !== 'Any') {
    proporcionNashe = parseInt(proportionWanted.split('/')[0]) / parseInt(proportionWanted.split('/')[1]);
    caloriesWanted = calorias * proporcionNashe;
  }
  


  const foods = await getAllFoods({ limit: 6, page, classification: classification , query: searchText, healthy: health, caloriesWanted});
  console.log(foods);
  return (
    <>
      <section id="foods" className="wrapper my-8 flex flex-col gap-8 md:12">
        <h2 className="h2-bold">Mas De Mil <br/>  Recetas Para Elegir...</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row ">
          <Search placeholder="Search foods..." />
          <HealthFilter />
          <ClassificationFilter />
          <ProportionFilter />
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
