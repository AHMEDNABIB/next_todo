'use client'


import { Inter } from "next/font/google";
import TableTodo from "@/components/TableTodo/TableTodo";
import useSWR from 'swr'


const url = "http://localhost:5000/todos";

const fetcher = (url: string) =>
	fetch(url, {
		headers: {
			"content-type": "application/json",
		},
	}).then((res) => res.json());

export default function Home() {


  const { data: result, mutate, error} = useSWR(url, fetcher);

//    console.log(result);

   if (error) {
		return <p>Error: {error.message}</p>;
   }

   if (!result) {
		return <p>Loading...</p>;
   }

  //  console.log(result);

  return (
   
		<main>
      <TableTodo result={result} mutate={mutate} />   
		</main>
	);
}
