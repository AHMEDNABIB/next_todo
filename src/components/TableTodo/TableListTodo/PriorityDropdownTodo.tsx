"use client";

import { Dropdown,Label,Select } from "flowbite-react";
import React, { useState } from 'react';


export default function DropdownTodo({priority,id, mutate}) {
	// const [selectedOption, setSelectedOption] = useState(priority);

	 const handleSelectOption = (option) => {
			
		 console.log(typeof(option))
		 
		 fetch(`http://localhost:5000/todos/priority/${id}`, {
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
	

	

	
	return (
		<>
			<Dropdown
				label=""
				// dismissOnClick={false}

				renderTrigger={() => (
					<span className="text-red-600 border text-semibold  text-xs  hover:bg-red-600 hover:text-white border-red-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
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
