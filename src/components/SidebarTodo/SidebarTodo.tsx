"use client";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { BsListCheck } from "react-icons/bs";
import { FaClipboardList, FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import Link from "next/link";
import ModalTodo from "./AddTodoModal";

const customTheme: CustomFlowbiteTheme = {};

export default function SidbarTodo() {
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
									<Link href="/">Inbox</Link>
								</div>
							</Sidebar.Item>
							<Sidebar.Item className="text-sm ">
								<div className="flex gap-3 items-center">
									<FaRegThumbsUp />
									<Link href="/">Done</Link>
								</div>
							</Sidebar.Item>
							<Sidebar.Item>
								<div className="flex gap-3 items-center">
									<FaRegStar />
									<Link href="/">Important</Link>
								</div>
							</Sidebar.Item>
							<Sidebar.Item>
								<div className="flex gap-3 items-center">
									<FaRegTrashCan />
									<Link href="/">Done</Link>
								</div>
							</Sidebar.Item>
						</Sidebar.ItemGroup>

						<Sidebar.ItemGroup>
							<Sidebar.Item className="text-sm">
								Tags
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center">
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
									<Link href="/" className="text-green-600">
										Team
									</Link>
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center">
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
									<Link href="/" className="text-yellow-800">
										Low
									</Link>
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center">
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
									<Link href="/" className="text-blue-800">
										Medium
									</Link>
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center">
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
									<Link href="/" className="text-red-600">
										High
									</Link>
								</div>
							</Sidebar.Item>

							<Sidebar.Item className=" hover:translate-x-6 transition duration-700 ease-in-out">
								<div className="flex gap-1 items-center">
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
									<Link href="/" className="text-emerald-300">
										Update
									</Link>
								</div>
							</Sidebar.Item>

							{/* grpup */}
						</Sidebar.ItemGroup>

						{/* ex */}
					</div>

					<Sidebar.ItemGroup>
						<Sidebar.Item>
							<ModalTodo />
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</div>
			</Sidebar.Items>
		</Sidebar>
	);
}
