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
import useSWR from "swr";


import ActionDropdownTodo from "@/components/TableTodo/TableListTodo/ActionDropdownTodo"
import SearchTodo from "@/components/TableTodo/TableHeader/SerarchTodo"
import PaginationTodo from "@/components/TableTodo/TableHeader/PaginationTodo";
import ViewModalTodo from "@/components/TableTodo/TableListTodo/ViewModalTodo"
import TagsDropdownTodo from "@/components/TableTodo/TableListTodo/TagsDropdownTodo"
import PriorityDropdownTodo from "@/components/TableTodo/TableListTodo/PriorityDropdownTodo"



import { useModal } from "@/context/ModalContext";


type ValueType = string | number;


function TableTodo({result, mutate}) {

	
	const { status, startTodo, endTodo, totalTodo, data } = result;

	const [openModal, setOpenModal] = useState(false);
	
	const [checked, setChecked] = useState([]);

	const [record, setRecord] = useState({ })

	console.log(checked)

	

     const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
			let updatedList = [...checked];
			if (event.target.checked) {
				updatedList = [...checked, event.target.value as ValueType];
			} else {
				updatedList.splice(checked.indexOf(event.target.value), 1);
			}
			setChecked(updatedList);
		};

	 const	isChecked = (item :boolean) =>
		checked.includes(item) ? "line-through" : "";
	
	
	const  showDetail =  (id :string) => {
		  fetch(`http://localhost:5000/todos/${id}`)
			.then((resposne) => resposne.json())
			.then((res)=>setRecord(res.data))

		setOpenModal(true);
		
			
		
		  
	};

		
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
									onClick={() => showDetail(todo._id)}
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
									<TagsDropdownTodo data={todo.tags} />
									<PriorityDropdownTodo
										data={todo.priority}
									/>
								</TableCell>
								<TableCell className={isChecked(todo._id)}>
									Jan, 17 2024
								</TableCell>

								<TableCell>
									<ActionDropdownTodo
										data={todo._id}
										isImportant={todo.isImportant}
										isDeleted={todo.isDeleted}
										mutate={mutate}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<ViewModalTodo data={record} />
			</Modal>
		</>
  );
}

export default TableTodo