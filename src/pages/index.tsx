import Image from "next/image";
import { Inter } from "next/font/google";
import TableTodo from "@/components/TableTodo/TableTodo";
import { useSession,signOut } from 'next-auth/react';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const {data: session}=useSession();
console.log(session);
  return (
    <main>
      <button onClick={()=>{
        signOut();
      }}>logout</button>
			<TableTodo  />
		</main>
  );
}
