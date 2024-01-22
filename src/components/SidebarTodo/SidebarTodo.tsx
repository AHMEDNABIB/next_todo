"use client";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { Sidebar, Button, Modal } from "flowbite-react";
import { BsListCheck } from "react-icons/bs";
import { FaClipboardList, FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

import Link from "next/link";
import ModalTodo from "./AddTodoModal";

const customTheme: CustomFlowbiteTheme = {};

export default function SidbarTodo() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<Sidebar
			className=" mx-3 rounded-lg   border-2 bg-white border-gray-200 "
			aria-label="Sidebar with content separator example">
			<Sidebar.Items>
				<div className="flex flex-col h-[600px] text-white">
					<Sidebar.ItemGroup>
						<Sidebar.Item icon={FaClipboardList}>
							TodoList
						</Sidebar.Item>
					</Sidebar.ItemGroup>

					<div className="flex-1  overflow-hidden group py-4 hover:overflow-y-scroll transition-all duration-300  ">
						<Sidebar.ItemGroup>
							<Sidebar.Item className="text-md">
								<div className="flex gap-3 items-center">
									<BsListCheck />
									Inbox
								</div>
							</Sidebar.Item>
							<Sidebar.Item className="text-sm ">
								<div className="flex gap-3 items-center">
									<FaRegThumbsUp />
									Done
								</div>
							</Sidebar.Item>
							<Sidebar.Item>
								<div className="flex gap-3 items-center">
									<FaRegStar />
									Important
								</div>
							</Sidebar.Item>
							<Sidebar.Item>
								<div className="flex gap-3 items-center">
									<FaRegTrashCan />
									Done
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
							<Button className="" onClick={() => setOpenModal(true)}>
								Toggle modal
							</Button>
							<Modal
								show={openModal}
								onClose={() => setOpenModal(false)}>
								<Modal.Header>Terms of Service</Modal.Header>
								<Modal.Body>
									<div className="space-y-6">
										<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
											With less than a month to go before
											the European Union enacts new
											consumer privacy laws for its
											citizens, companies around the world
											are updating their terms of service
											agreements to comply.
										</p>
										<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
											The European Union’s General Data
											Protection Regulation (G.D.P.R.)
											goes into effect on May 25 and is
											meant to ensure a common set of data
											rights in the European Union. It
											requires organizations to notify
											users as soon as possible of
											high-risk data breaches that could
											personally affect them.
										</p>
									</div>
								</Modal.Body>
								<Modal.Footer>
									<Button onClick={() => setOpenModal(false)}>
										I accept
									</Button>
									<Button
										color="gray"
										onClick={() => setOpenModal(false)}>
										Decline
									</Button>
								</Modal.Footer>
							</Modal>
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</div>
			</Sidebar.Items>
		</Sidebar>
	);
}
