"use client";

import { Dropdown } from "flowbite-react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegStar } from 'react-icons/fa';

export default function DropdownTodo() {
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
				<Dropdown.Item>
					<div className="flex gap-1 items-center">
						<FaRegPenToSquare />
						<div>Edit</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item>
					<div className="flex gap-1 items-center">
						<FaRegTrashCan />
						<div>Delete</div>
					</div>
				</Dropdown.Item>
				<Dropdown.Item>
					<div className="flex gap-1 items-center">
						<FaRegStar/>
						<div>Not Important</div>
					</div>
				</Dropdown.Item>
			</Dropdown>
		</div>
	);
}
