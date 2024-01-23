"use client";

import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

import MainModal from "@/components/Common/Modal";
import { useModal } from "@/context/ModalContext";

export default function DropdownTodo() {
	// const { openModal, setOpenModal } = useModal();
	const [openModal, setOpenModal] = useState(false);

	const handleModal = () => {
		
		setOpenModal(true);
		
	};
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
				<Dropdown.Item onClick={() => setOpenModal((prev) => !prev)}>
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
						<FaRegStar />
						<div>Not Important</div>
					</div>
				</Dropdown.Item>
			</Dropdown>

			<MainModal
						title="Marge Todo"
						show={openModal}
						onClose={() => setOpenModal((prev) => !prev)}>
						<h3>hello world</h3>
					</MainModal>
		</div>


                       
	);
}
