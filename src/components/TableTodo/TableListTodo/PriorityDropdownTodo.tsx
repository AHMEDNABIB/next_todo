"use client";

import { Dropdown } from "flowbite-react";

export default function DropdownTodo() {
	return (
		<>
			<Dropdown
				label=""
				dismissOnClick={false}
				renderTrigger={() => (
					<span className="text-red-600 border text-semibold  text-xs  hover:bg-red-600 hover:text-white border-red-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
						High
					</span>
				)}>
				<Dropdown.Item>High</Dropdown.Item>
				<Dropdown.Item>Medium</Dropdown.Item>
				<Dropdown.Item>Low</Dropdown.Item>
			</Dropdown>
		</>
	);
}
