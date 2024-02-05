"use client";

import TableTodo from "@/components/TableTodo/TableTodo";
import SidebarTodo from "@/components/SidebarTodo/SidebarTodo";
import useSWR, { mutate as swrMutate } from "swr";
import fetcher from "../../services/requestUtils";
import React, { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("inprogress");
  let [page, setPage] = useState(1);
  const PAGE_LIMIT = 6;
  const baseUrl = process.env.NEXTAUTH_SERVER_URL || "http://localhost:3001";
  const url = `${baseUrl}/todos/status/${status}?page=${page}&limit=${PAGE_LIMIT}`;

  const { data: result, mutate, error } = useSWR(url, fetcher);
console.log(result);
  if (!result) {
    return <p>Loading...</p>;
  }

  const totalPages = Math.ceil(result?.length / PAGE_LIMIT);

  if (result?.length === 0) {
    page = 0;
  }
  const handlePrevClick = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      swrMutate(url);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      swrMutate(url);
    }
  };

  const handleToggle = (id: string, isDone:boolean) => {
    fetcher(`${baseUrl}/todos/done/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isDone,
      }),
    });
  };
  swrMutate(url);
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
