"use client";

import { Dropdown } from "flowbite-react";
import Swal from "sweetalert2";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

import MainModal from "@/components/Common/Modal";

export default function DropdownTodo({data,isImportant, isDeleted, mutate}) {
		
	const [openModal, setOpenModal] = useState(false);

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
					`http://localhost:5000/todos/${id}`,
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
					fetch(`http://localhost:5000/todos/permanent/${id}`, {
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
		fetch(`http://localhost:5000/todos/restore/${id}`, {
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
		  fetch(`http://localhost:5000/todos/important/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					isImportant: true,
					
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});

					mutate()
			

	}


		const handleUnimportant =(id)=>{
		  fetch(`http://localhost:5000/todos/unimportant/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					isImportant: false
					
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
						<Dropdown.Item onClick={() => handlePermanentDelete(data)}>
							<div className="flex gap-1 items-center">
								<FaRegTrashCan />
								<div>Permanent Delete</div>
							</div>
						</Dropdown.Item>
						<Dropdown.Item onClick={() => handleRestoreTask(data)}>
							<div className="flex gap-1 items-center">
								<TbReload />
								<div>Restore Task</div>
							</div>
						</Dropdown.Item>
					</>
				) : (
						<>
							<Dropdown.Item onClick={() => setOpenModal((prev) => !prev)}>
								<div className="flex gap-1 items-center">
									<FaRegPenToSquare />
									<div>Edit</div>
								</div>
							</Dropdown.Item>

							<Dropdown.Item onClick={() => handleSoftDelete(data)}>
								<div className="flex gap-1 items-center">
									<FaRegTrashCan />
									<div>Delete</div>
								</div>
							</Dropdown.Item>

							
							<Dropdown.Item
								onClick={() =>
									isImportant === false
										? handleImportant(data)
										: handleUnimportant(data)
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
				title="Marge Todo"
				show={openModal}
				onClose={() => setOpenModal((prev) => !prev)}>
				<h3>hello world</h3>
			</MainModal>
		</div>
	);
}
