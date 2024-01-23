"use client"

import { Modal } from "flowbite-react";

function MainModal({
	title,
	show,
	onClose,
	children,
}: {
	title: String;
	show: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) {
	// console.log(title, show);
	return (
		<div>
			<Modal show={show} onClose={onClose}>
				<Modal.Header>{title}</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
			</Modal>
		</div>
	);
}

export default MainModal;
