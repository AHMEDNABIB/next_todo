"use client";

import {
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Button,
	Modal
} from "flowbite-react";
import { useState } from "react";

import Image from "next/image";
import ActionDropdownTodo from "@/components/TableTodo/TableListTodo/ActionDropdownTodo"
import SearchTodo from "@/components/TableTodo/TableHeader/SerarchTodo"
import PaginationTodo from "@/components/TableTodo/TableHeader/PaginationTodo";
import ViewModalTodo from "@/components/TableTodo/TableListTodo/ViewModalTodo"
import TagsDropdownTodo from "@/components/TableTodo/TableListTodo/TagsDropdownTodo"
import PriorityDropdownTodo from "@/components/TableTodo/TableListTodo/PriorityDropdownTodo"

function TableTodo() {
	  const priority = ['high', 'medium', 'low'];

	  const [openModal, setOpenModal] = useState(false);
	  const [isChecked, setIsChecked] = useState(false);

	  const handleCheckboxChange = () => {
	    setIsChecked(!isChecked);
	  };
		
  return (
		<>
			<div className="overflow-x-auto w-[900px] border-2 rounded-md border-zinc-200 ">
				<div className="flex justify-between gap-6 mx-4 my-6 ">
					<SearchTodo />
					<PaginationTodo />
				</div>
				<hr/>
				<Table hoverable>
					<TableBody className="divide-y divide-x">

					<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" > 
							<TableCell className="p-4 cursor-pointer peer">
								<Checkbox checked={isChecked}  onChange={handleCheckboxChange} />
							</TableCell>
							
								<TableCell onClick={() => setOpenModal(true)}  className="whitespace-nowrap font-medium text-gray-900 dark:text-white mr-24 ">
									<h1 className={`text-lg font-semibold cursor-pointer  ${isChecked ? 'line-through text-gray-500' : ''} `}>
										hello world
									</h1>
									<p className={`ml-2  ${isChecked ? 'line-through text-gray-500' : ''}`}>
									lorem irejdsfhho hfuih faihihf hfhi
										
									
									</p>
								</TableCell>
							
								<TableCell className="flex justify-end pt-3 gap-2 mr-10" >
									<TagsDropdownTodo />
									<PriorityDropdownTodo/>
								
									
								</TableCell>
								<TableCell className={`cursor-pointer  ${isChecked ? 'line-through text-gray-500 ' : ''} `}>Jan, 17 2024</TableCell>
								<TableCell>
									<Image
										alt="Bonnie image"
										height="45"
										src=""
										width="45"
										className="mb-3 rounded-full shadow-lg"
									/>
								</TableCell>
							

							<TableCell>
								<ActionDropdownTodo />
							</TableCell>
						</TableRow>
				     
					</TableBody>
				</Table>
			</div>


			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ViewModalTodo/>
			</Modal>
		</>
  );
}

export default TableTodo