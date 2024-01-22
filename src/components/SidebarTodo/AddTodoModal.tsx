"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function ModalTodo() {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<Button className="w-full "  onClick={() => setOpenModal(true)}>
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
				Add New Task</Button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Add Todo</Modal.Header>
				<Modal.Body>
					<form className="p-4 md:p-5">
						<div className="grid gap-4 mb-4 grid-cols-2">
							<div className="col-span-2">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type product name"
									required=""
								/>
							</div>
							<div className="col-span-2 sm:col-span-1">
								<label
									htmlFor="category"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Tag
								</label>
								<select
									id="category"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
									<option selected="">Select Tag</option>
									<option value="">TV</option>
									<option value="PC">PC</option>
									<option value="GA">Gaming/Console</option>
									<option value="PH">Phones</option>
								</select>
							</div>
							<div className="col-span-2 sm:col-span-1">
								<label
									htmlFor="category"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Priority
								</label>
								<select
									id="category"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
									<option selected="">Select Priority</option>
									<option value="high">High</option>
									<option value="medium">Medium</option>
									<option value="low">Low</option>
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
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Write product description here"
									defaultValue={""}
								/>
							</div>
						</div>
						<div className="flex justify-end gap-5 text-sm font-medium text-gray-500 dark:text-gray-300">
							
							<Button outline gradientMonochrome="failure">Cancel</Button>
							<Button gradientMonochrome="info">Add</Button>
                        </div>
						
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}
