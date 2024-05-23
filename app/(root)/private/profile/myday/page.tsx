import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MyFoods from "@/components/shared/MyFoods";




const Page = async () => {
  const user = await auth();
  console.log(user);
  const isUserDataIncomplete = !user?.user?.gender || !user?.user?.name || !user?.user?.weight || !user?.user?.age || !user?.user?.height || !user?.user?.objective;

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
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenido, {user.user.name}!</h1>
            <p className="text-lg">Género: {user.user.gender}</p>
            <p className="text-lg">Edad: {user.user.age}</p>
            <p className="text-lg">Altura: {user.user.height} cm</p>
            <p className="text-lg">Peso: {user.user.weight} kg</p>
            <p className="text-lg">Objetivo: {user.user.objective}</p>
          </div>
          {/* Aquí puedes agregar una imagen del usuario si tienes esa información */}
          {/* <img src={user.user.avatar} alt="Avatar" className="rounded-full w-36 h-36 object-cover" /> */}
        </div>
      )}
    </section>
    <MyFoods />
    </>
  );
};

export default Page;
