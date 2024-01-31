"use client";

import { Dropdown, Label, Select } from "flowbite-react";
import React, { useState } from "react";

export default function DropdownTodo({ tags, id, mutate }) {
	// const [selectedOption, setSelectedOption] = useState(priority);

	const handleSelectOption = (option) => {
		console.log(typeof option);

		fetch(`http://localhost:3001/todos/tags/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			   tags: option,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});

		mutate();
	};

  const getColorByTag = (tags) => {
    switch (tags) {
      case "Team":
        return "red-600";
      case "Update":
        return "green-600";
      
      default:
        return "gray-600";
    }
  };



	return (
		<>
			<Dropdown
				label=""
				// dismissOnClick={false}

				renderTrigger={() => (
					<span  className={`text-${getColorByTag(tags)} border text-semibold text-xs hover:bg-${getColorByTag(tags)} hover:text-white border-${getColorByTag(tags)} h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>
						{tags}
					</span>
				)}>
				<Dropdown.Item onClick={() => handleSelectOption("Team")}>
					Team
				</Dropdown.Item>
				<Dropdown.Item onClick={() => handleSelectOption("Update")}>
					Update
				</Dropdown.Item>
				
			</Dropdown>
		</>
	);
}
