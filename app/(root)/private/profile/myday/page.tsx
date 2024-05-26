import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MyFoods from "@/components/shared/MyFoods";
import { UserCa } from "@/types";
import useRouter from "next/navigation";

type PageProps = {
  doReload?: boolean;
};

const Page: React.FC<PageProps> = async ({doReload = false} = {}) => {
  const user = (await auth())?.user as UserCa;
  console.log(user);
  const isUserDataIncomplete = !user?.gender || !user?.name || !user?.weight || !user?.age || !user?.height || !user?.objective || !user?.activity;
  let calorias = 0;
  
  if (user.gender == "Male"){
    calorias = 66.5 + (13.75 * (user.weight ?? 0)) + (5.003 * (user.height ?? 0)) - (6.75 * (user.age ?? 0))
  } else {
    calorias = 66.5 + (9.563 * (user.weight ?? 0)) + (1.850 * (user.height ?? 0)) - (4.676 * (user.age ?? 0))
  }

  if(user.activity == 'Low to Nothing')  {
    calorias = calorias * 1.2
  }else if(user.activity == 'Light') {
    calorias = calorias * 1.375
  }else if(user.activity == 'Moderate') {
    calorias = calorias * 1.55
  }else if(user.activity == 'Always') {
    calorias = calorias * 1.725
  }
  return (
    <>
    <section className="bg-gray-100 bg-dotted-pattern bg-contain py-5 md:py-10 min-h-screen">
      {isUserDataIncomplete ? (
        <div className="text-center py-8">
          <p className="text-lg font-bold mb-4">Primero necesitamos tus datos para comenzar!</p>
          <Button asChild size={'lg'} className="button w-full md:w-fit bg-malachite-600">
            <Link href={'/private/profile/update'}>
              Comienza!
            </Link> 
          </Button>
        </div>
      ) : (
        <div className="wrapper">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Welcome, {user?.name}!
                </h3>
                <Link href={'/private/profile/update'}  className="mt-4 max-w-2xl text-sm text-malachite-400 underline hover:text-malachite-600">
                    Update data here!
                </Link>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Gender
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user?.gender}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Age
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.age} years
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Height
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user?.height} cm
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Weight
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user?.weight} kg
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Objective
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user?.objective}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Activity
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user?.activity}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Calories per day
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {calorias} calories
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        </div>
        // <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        //   <div className="flex flex-col justify-center gap-8">
        //     <h1 className="text-4xl font-bold mb-4">Bienvenido, {user?.name}!</h1>
        //     <p className="text-lg">Género: {user?.gender}</p>
        //     <p className="text-lg">Edad: {user?.age}</p>
        //     <p className="text-lg">Altura: {user?.height} cm</p>
        //     <p className="text-lg">Peso: {user?.weight} kg</p>
        //     <p className="text-lg">Objetivo: {user?.objective}</p>
        //     <p className="text-lg">Actividad: {user?.activity}</p>
        //     <p className="text-lg">Calorias diarias: {calorias} Cal</p>
        //   </div>
        //   {/* Aquí puedes agregar una imagen del usuario si tienes esa información */}
        //   {/* <img src={user.user.avatar} alt="Avatar" className="rounded-full w-36 h-36 object-cover" /> */}
        // </div>
      )}
    </section>
    <MyFoods />
    </>
  );
};

export default Page;
