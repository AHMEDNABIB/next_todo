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
	 let [page, setPage] = useState(1);

	const PAGE_LIMIT = 6

    const url = `http://localhost:3001/todos/status/${status}?page=${page}&limit=${PAGE_LIMIT}`;
	
	const { data: result, mutate, error } = useSWR(url, fetcher);

    if (!result) {
		return <p>Loading...</p>;
	}

	const totalPages = Math.ceil(result?.length / PAGE_LIMIT);

	console.log(result)

	if (result?.length === 0) {
		page=0
	}
const handlePrevClick = () => {
		if (page > 1) {
			setPage((prevPage) => prevPage - 1);
			mutate()
		}
  };

  const handleNextClick = () => {
		if (page < totalPages) {
			setPage((prevPage) => prevPage + 1);
			mutate();
		}
  };

	const handleToggle = (id, isDone) => {
	
		  fetch(`localhost:3001/todos/done/${id}`, {
	      method: "PATCH",
	      headers: { "Content-Type": "application/json" },
	      body: JSON.stringify({
	        isDone
	      }),
	    })
	    .then((res) => res.json())
	    .then((data) => {
	      console.log(data);
	    });
  
  };
 

   if (error) {
		return <p>Error: {error.message}</p>;
   }


  return (
		<main>
			<div className="flex gap-4 mt-4 ">
				<SidebarTodo onStatusChange={setStatus} mutate={mutate} />
				<TableTodo
					result={result}
					mutate={mutate}
					handlePrevClick={handlePrevClick}
					handleNextClick={handleNextClick}
					page={page}
					totalPages={totalPages}
					onToggle={handleToggle}
				/>
			</div>
		</main>
  );
}
