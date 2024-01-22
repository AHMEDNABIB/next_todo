import Image from "next/image";
import { Inter } from "next/font/google";
import TableTodo from "@/components/TableTodo/TableTodo";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TableTodo />
      
     
      
		</main>
  );
}
