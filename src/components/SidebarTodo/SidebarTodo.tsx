"use client";

import { Sidebar,Button } from "flowbite-react";
import { BsListCheck } from "react-icons/bs";
import { FaClipboardList, FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import { useState } from "react";
import MainModal from "@/components/Common/Modal"
import Swal from "sweetalert2";

import CommonButton from "@/components/Common/Button"



export default function SidbarTodo({onStatusChange}) {

	const [openModal, setOpenModal] = useState(false);

	const [formData, setFormData] = useState({
		title: "",
		tags: "",
		priority: "",
		description: "",
	});

	// console.log(formData)

	 const handleChange = (e) => {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		};

		const submitForm = (e) => {
			e.preventDefault();

		    fetch("http://localhost:3001/todos/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			})
				.then((res) => res.json())
				.then((data) => {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Todo is Added",
						showConfirmButton: false,
						timer: 1500
						});
					console.log(data);
				});
			
			setOpenModal((prev) => !prev);
		};


	return (
		<Sidebar
			className=" mx-3 rounded-lg   border-2 bg-white border-gray-200 "
			aria-label="Sidebar with content separator example">
			<Sidebar.Items>
				<div className="flex flex-col h-[580px] text-white">
					<Sidebar.ItemGroup>
						<Sidebar.Item icon={FaClipboardList}>
							TodoList
						</Sidebar.Item>
					</Sidebar.ItemGroup>

					<div className="flex-1 cursor-pointer   group py-4 overflow-hidden hover:overflow-y-scroll transition-all duration-300  ">
						<Sidebar.ItemGroup>
							<Sidebar.Item className="text-md"  onClick={() => onStatusChange('inprogress')} >
								<div className="flex gap-3 items-center">
									<BsListCheck />
									Inbox
								</div>
							</Sidebar.Item>
							<Sidebar.Item className="text-sm " onClick={() => onStatusChange('done')}>
								<div className="flex gap-3 items-center">
									<FaRegThumbsUp />
									Done
								</div>
							</Sidebar.Item>
							<Sidebar.Item onClick={() => onStatusChange('important')}>
								<div className="flex gap-3 items-center">
									<FaRegStar />
									Important
								</div>
							</Sidebar.Item>
							<Sidebar.Item  onClick={() => onStatusChange('trash')}>
								<div className="flex gap-3 items-center">
									<FaRegTrashCan />
									Trash
								</div>
							</Sidebar.Item>
						</Sidebar.ItemGroup>

						<Sidebar.ItemGroup>
							<Sidebar.Item className="text-sm">
								Tags
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center text-green-600">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="rgb(22 163 74)"
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-45  shrink-0 rotate-45 fill-success">
										<path
											d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
											stroke="currentColor"
											stroke-width=".5"
										/>
									</svg>
									Team
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center text-yellow-800">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="rgb(202 138 4)"
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-45  shrink-0 rotate-45 fill-success">
										<path
											d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
											stroke="currentColor"
											stroke-width=".5"
										/>
									</svg>
									Low
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center text-blue-800">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="rgb(30 64 175)"
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-45  shrink-0 rotate-45 fill-success">
										<path
											d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
											stroke="currentColor"
											stroke-width=".5"
										/>
									</svg>
									Medium
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center text-red-600">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="rgb(220 38 38)"
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-45  shrink-0 rotate-45 fill-success">
										<path
											d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
											stroke="currentColor"
											stroke-width=".5"
										/>
									</svg>
									High
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center text-emerald-300">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="rgb(110 231 183)"
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-45  shrink-0 rotate-45 fill-success">
										<path
											d="M2 12c0 -4.714 0 -7.071 1.464 -8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071 -1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0 -8.536 -1.465C2 19.072 2 16.714 2 12Z"
											stroke="currentColor"
											stroke-width=".5"
										/>
									</svg>
									Update
								</div>
							</Sidebar.Item>
						</Sidebar.ItemGroup>
					</div>

					<Sidebar.ItemGroup>
						<Sidebar.Item>
							<Button
								className="w-full "
								onClick={() => setOpenModal((prev) => !prev)}>
								<svg
									className="me-1 -ms-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clipRule="evenodd"
									/>
								</svg>
								Add New Task
							</Button>

							<MainModal
								title="Add Todo"
								show={openModal}
								onClose={() => setOpenModal((prev) => !prev)}>
								<form className="p-4 md:p-5"  onSubmit={submitForm}>
									<div className="grid gap-4 mb-4 grid-cols-2">
										<div className="col-span-2">
											<label
												htmlFor="Title"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Task Title
											</label>
											<input
												type="text"
												name="title"
												value={formData.title}
                                                onChange={handleChange}
												id="name"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
												placeholder="Type task title"
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
												<option selected="">
													Select Tag
												</option>
												<option value="Team">
													Team
												</option>
												<option value="Update">
													Update
												</option>
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
												<option selected="">
													Select Priority
												</option>
												<option value="High">
													High
												</option>
												<option value="Medium">
													Medium
												</option>
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
												placeholder="Write Your task description"
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

										<Button
											gradientMonochrome="info"
											type="submit">
											Add
										</Button>
									</div>
								</form>
							</MainModal>
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</div>
			</Sidebar.Items>
		</Sidebar>
	);
}
