"use client";

import { Button, Modal } from "flowbite-react";

export default function ViewModalTodo({ data }) {

	
	return (
		<div>
			
			<Modal.Header>
				<div className="flex gap-5">
					<h1 className="text-lg font-semibold">{data.title}</h1>
					<div className="flex flex-wrap gap-2">
						<span className="text-green-600 border text-semibold  text-xs  hover:bg-green-600 hover:text-white border-green-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
							{data.tags}
						</span>
						<span className="text-red-600 border text-semibold  text-xs  hover:bg-red-600 hover:text-white border-red-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
							{data.priority}
						</span>
					</div>
				</div>
			</Modal.Header>
			<Modal.Body>
				<div className="space-y-6">
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						{data.description}
					</p>
				</div>
				<div className="flex justify-end mt-8">
					<span
						className="text-rose-500 bg-transparent border border-solid border-rose-500 hover:bg-rose-600 hover:text-white active:bg-rose-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150  "
						type="button">
						Close
					</span>
					
				</div>
			</Modal.Body>
			
		</div>
	);
}
