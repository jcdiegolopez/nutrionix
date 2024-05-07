import Image from "next/image";
import {getALlUsers} from "@/lib/actions/user.actions";


export default async function Home() {
  const users = await getALlUsers();
  console.log(users);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
