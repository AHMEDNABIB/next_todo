"use client";


import { Dropdown , Button } from "flowbite-react";

export default function DropdownTodo() {
	return (
		<>
			<Dropdown
				label="hello"
				dismissOnClick={false}
				renderTrigger={() => (
					<span className="text-green-600 border text-semibold  text-xs  hover:bg-green-600 hover:text-white border-green-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
						Medium
					</span>
				)}>
				<Dropdown.Item>Team</Dropdown.Item>
				<Dropdown.Item>Update</Dropdown.Item>
			</Dropdown>
		</>
	);
}
