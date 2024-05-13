import Image from "next/image";
import {getALlUsers} from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const users = await getALlUsers();
  console.log(users);
  return (
    <>
      <section className="bg-gray-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Busca, encuentra y elige la mejor comida para ti!</h1>
            <p className="p-regular-20 md:p-regular-24">Elige entre las mas de 4000+ opciones de comidas
            que tenemos para ti. </p>
            <Button asChild size={'lg'} className="button w-full md:w-fit bg-malachite-600">
              <Link href={'/'}>
                Comienza!
              </Link>
            </Button>
          </div>
          <Image src="/assets/images/banner.png" alt="Banner" width={1000} height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] drop-shadow-custom" /> 
        </div>
      </section>
    </>
  );
}
