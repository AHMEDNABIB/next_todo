"use client";

import { Button, Modal } from "flowbite-react";

export default function ViewModalTodo() {
	return (
		<div>
			<Modal.Header>
				<div className="flex gap-5">
					<h1 className="text-lg font-semibold">hello world</h1>
					<div className="flex flex-wrap gap-2">
						<span className="text-green-600 border text-semibold  text-xs  hover:bg-green-600 hover:text-white border-green-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
							Medium
						</span>
						<span className="text-red-600 border text-semibold  text-xs  hover:bg-red-600 hover:text-white border-red-400 h-8 rounded-full px-3 py-2 cursor-pointer outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
							High
						</span>
					</div>
				</div>
			</Modal.Header>
			<Modal.Body>
				<div className="space-y-6">
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						With less than a month to go before the European Union
						enacts new consumer privacy laws for its citizens,
						companies around the world are updating their terms of
						service agreements to comply. Lorem ipsum dolor sit
						amet, consectetur adipisicing elit. Molestias ex amet
						possimus exercitationem eaque corrupti inventore totam
						quidem blanditiis eum.
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
