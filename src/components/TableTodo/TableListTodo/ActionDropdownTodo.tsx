"use client";

import { Dropdown, Button } from "flowbite-react";
import Swal from "sweetalert2";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

import MainModal from "@/components/Common/Modal";
import CommonButton from "@/components/Common/Button"


export default function DropdownTodo({id,isImportant, isDeleted, mutate, todoData}) {
		
	const [openModal, setOpenModal] = useState(false);

	
	const [formData, setFormData] = useState({
		title: todoData.title,
		tags: todoData.tags,
		priority: todoData.priority,
		description: todoData.description,
	});

	// console.log(formData)


	const submitForm = (e) => {
		e.preventDefault();

		fetch(`http://localhost:3001/todos/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		mutate();
		setOpenModal(false);
		
	};

	 const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		};

	const handleModal = () => {
		
		setOpenModal(true);
		
	};

	const handleSoftDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`http://localhost:3001/todos/${id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {

						console.log(data)
						
							Swal.fire(
								"Deleted!",
								"Todo move to trash.",
								"success"
						);
						 mutate();
						
					});
			}
		});
	};


	const handlePermanentDelete = (id) => {
			Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			}).then((result) => {
				if (result.isConfirmed) {
					fetch(`http://localhost:3001/todos/permanent/${id}`, {
						method: "DELETE",
					})
						.then((res) => res.json())
						.then((data) => {
							console.log(data);

							Swal.fire(
								"Deleted!",
								"Todo deleted Permanently.",
								"success"
							);
						});
					
					mutate()
				}
			});
	};
	
	const handleRestoreTask = (id) => {
		fetch(`http://localhost:3001/todos/restore/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				isDeleted: false
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		
		  mutate()


	};


	const handleImportant =(id)=>{
		  fetch(`http://localhost:3001/todos/important/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					isImportant: true,
					status:"important"
					
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});

					mutate()
			

	}


		const handleUnimportant =(id)=>{
		  fetch(`http://localhost:3001/todos/unimportant/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					isImportant: false,
					status:"inprogress"
					
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
					mutate()
			

	}

	return (
		<div>
			<Dropdown
				label="Action"
				dismissOnClick={false}
				renderTrigger={() => (
					<div>
						<CiMenuKebab />
					</div>
				)}>
				{isDeleted === true ? (
					<>
						<Dropdown.Item
							onClick={() => handlePermanentDelete(id)}>
							<div className="flex gap-1 items-center">
								<FaRegTrashCan />
								<div>Permanent Delete</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item onClick={() => handleRestoreTask(id)}>
							<div className="flex gap-1 items-center">
								<TbReload />
								<div>Restore Task</div>
							</div>
						</Dropdown.Item>
					</>
				) : (
					<>
						<Dropdown.Item
							onClick={() => setOpenModal((prev) => !prev)}>
							<div className="flex gap-1 items-center">
								<FaRegPenToSquare />
								<div>Edit</div>
							</div>
						</Dropdown.Item>

						<Dropdown.Item onClick={() => handleSoftDelete(id)}>
							<div className="flex gap-1 items-center">
								<FaRegTrashCan />
								<div>Delete</div>
							</div>
						</Dropdown.Item>

						<Dropdown.Item
							onClick={() =>
								isImportant === false
									? handleImportant(id)
									: handleUnimportant(id)
							}>
							<div className="flex gap-1 items-center">
								<FaRegStar />
								<div>
									{isImportant === false
										? "Important"
										: "Not Important"}
								</div>
							</div>
						</Dropdown.Item>
					</>
				)}
			</Dropdown>

			<MainModal
				title="Edit Todo"
				show={openModal}
				onClose={() => setOpenModal((prev) => !prev)}>
				<form className="p-4 md:p-5"
				 onSubmit={submitForm}
				>
					<div className="grid gap-4 mb-4 grid-cols-2">
						<div className="col-span-2">
							<label
								htmlFor="name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Name
							</label>
							<input
								type="text"
								name="title"
								value={formData.title}
								 onChange={handleChange}
								id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								
								
							/>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<label
								htmlFor="tags"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Tag
							</label>
							<select
								id="tags"
								value={formData.tags}
								onChange={handleChange}
								name="tags"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
								<option value="">Select Tag</option>
								<option value="Team">Team</option>
								<option value="Update">Update</option>
							</select>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<label
								htmlFor="priority"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Priority
							</label>
							<select
								id="priority"
								value={formData.priority}
								onChange={handleChange}
								name="priority"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
								<option selected="">Select Priority</option>
								<option value="High">High</option>
								<option value="Medium">Medium</option>
								<option value="Low">Low</option>
							</select>
						</div>
						<div className="col-span-2">
							<label
								htmlFor="description"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Product Description
							</label>
							<textarea
								id="description"
								rows={4}
								value={formData.description}
								onChange={handleChange}
								name="description"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Write product description here"
								defaultValue={""}
							/>
						</div>
					</div>
					<div className="flex justify-end gap-5 text-sm font-medium text-gray-500 dark:text-gray-300">
						<CommonButton
							onClick={() => setOpenModal(false)}
							color="rose">
							Cancel
						</CommonButton>

						<Button gradientMonochrome="info" type="submit">
							Edit
						</Button>
					</div>
				</form>
			</MainModal>
		</div>
	);
}
