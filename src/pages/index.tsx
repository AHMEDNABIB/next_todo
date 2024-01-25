'use client'

import TableTodo from "@/components/TableTodo/TableTodo";
import SidebarTodo from "@/components/SidebarTodo/SidebarTodo"
import useSWR from 'swr'

import React, { useState } from 'react';



const fetcher = (url: string) =>
	fetch(url, {
		headers: {
			"content-type": "application/json",
		},
	}).then((res) => res.json());

export default function Home() {

	const [status, setStatus] = useState("inprogress");

	console.log(status)

	const url = `http://localhost:3001/todos/status/${status}`;


	const { data: result, mutate, error } = useSWR(url, fetcher);
	
	// console.log(result)

   if (error) {
		return <p>Error: {error.message}</p>;
   }

   if (!result) {
		return <p>Loading...</p>;
   }

  return (
		<main>
			<div className="flex gap-4 mt-4 ">
				<SidebarTodo onStatusChange={setStatus} />
				<TableTodo result={result} mutate={mutate} />
			</div>
		</main>
  );
}
