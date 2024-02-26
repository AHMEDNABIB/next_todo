"use client";

import { Dropdown } from "flowbite-react";
import React from 'react';


export default function DropdownTodo({priority,id, mutate}:any) {

	 const handleSelectOption = (option: any) => {
			
		 console.log(typeof(option))
		 
		 fetch(`http://localhost:3001/todos/priority/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					priority: option
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});

			mutate();
			
	};

	const getColorByPriority = (priority:string) => {
    switch (priority) {
		
		case "High":
			return "red-600";
		case "Medium":
			return "green-600";

		default:
			return "gray-600";
	}
  };
		
	return (
		<>
			<Dropdown
				label=""

				renderTrigger={() => (
					<span
						className={`text-${getColorByPriority(
							priority
						)} border text-semibold text-xs hover:bg-${getColorByPriority(
							priority
						)} hover:text-white border-${getColorByPriority(priority)} h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>
						{priority}
					</span>
				)}>
				<Dropdown.Item onClick={() => handleSelectOption("High")}>
					High
				</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelectOption("Medium")}>
					Medium
				</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelectOption("Low")}>
					Low
				</Dropdown.Item>
			</Dropdown>
		</>
	);

	 

	
	
}
