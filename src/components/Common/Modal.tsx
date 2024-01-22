import { Modal } from "flowbite-react";

function MainModal({ title, show, close, children }:{title:String, show: boolean}) {
	return (
		<div>
			<Modal show={show} onClose={() => close(false)}>
				<Modal.Header>{title}</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
			</Modal>
		</div>
	);
}

export default MainModal;
