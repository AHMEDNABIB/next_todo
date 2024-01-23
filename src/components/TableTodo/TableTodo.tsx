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



import { useModal } from "@/context/ModalContext";




function TableTodo({result}) {

	
	const { status, startTodo, endTodo, totalTodo, data } = result;
	
	const [openModal, setOpenModal] = useState(false);
	
	const [checked, setChecked] = useState([]);

		const handleCheck = (event) => {
		let updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
		};

	 const	isChecked = (item) =>
        checked.includes(item) ? "line-through" : "";
		
  return (
		<>
			<div className="overflow-x-auto w-full border-2 rounded-md border-zinc-200 ">
				<div className="flex justify-between gap-6 mx-4 my-6 ">
					<SearchTodo />
					<PaginationTodo />
				</div>
				<hr />
				<Table hoverable>
					<TableBody className="divide-y divide-x">
						{data.map((todo) => (
							<TableRow
								className="bg-white dark:border-gray-700 dark:bg-gray-800  "
								key={todo._id}>
								<TableCell className="p-4 cursor-pointer peer">
									<Checkbox
										value={todo._id}
										onChange={handleCheck}
									/>
								</TableCell>

								<TableCell
									// onClick={() => setOpenModal(true)}
									className="whitespace-nowrap font-medium text-gray-900 dark:text-white mr-24 ">
									<h1 className={isChecked(todo._id)}>
										{todo.title}
									</h1>
									<p className={isChecked(todo._id)}>
										{todo.description} Lorem ipsum dolor sit
										amet consectetur adipisicing elit.
										Reprehenderit neque,{" "}
									</p>
								</TableCell>

								<TableCell className="flex justify-end gap-2 items-center mt-4">
									<TagsDropdownTodo />
									<PriorityDropdownTodo />
								</TableCell>
								<TableCell className={isChecked(todo._id)} >
									Jan, 17 2024
								</TableCell>

								<TableCell>
									<ActionDropdownTodo />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ViewModalTodo />
			</Modal>
		</>
  );
}

export default TableTodo