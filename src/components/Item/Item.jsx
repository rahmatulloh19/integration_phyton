import { useState } from "react";
import { Accordion } from "../Accordion/Accordion";
import { Modal } from "../Modal/Modal";
import axios from "axios";

export const Item = ({ id, title, description, name, is_done }) => {
	// const [close, setClose] = useState(false);
	// console.log(title);

	const handleDelete = (evt) => {
		evt.preventDefault();

		axios.delete(`http://localhost:8000/todo/${id}`).then((res) => {
			console.log(res);
		});
	};

	return (
		<li className="d-flex justify-content-between align-items-center list-group-item">
			<div className="wrapper d-flex align-items-center flex-grow-1">
				<input
					className="form-check-input me-3"
					disabled
					type="checkbox"
					defaultChecked={is_done}
				/>
				<div className="wrapper  flex-grow-1 me-3">
					<p className={`fs-4 ${is_done ? "text-decoration-line-through" : ""}`}>{name}</p>
					<Accordion title={title} id={id}>
						{description}
					</Accordion>
				</div>
			</div>

			<div className="wrapper d-flex gap-3">
				<button
					className="btn btn-danger"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">
					Delete
				</button>
				<button
					className="btn btn-warning"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">
					Edit
				</button>
			</div>
			{/* <Modal>
				<form className="d-flex align-items-end flex-wrap gap-3 p-3" onSubmit={handleDelete}>
					<h4>Do you really want to delete this todo "{name}"</h4>
					<button className="btn btn-secondary ms-auto" type="button" data-bs-dismiss="modal">
						Cancel
					</button>
					<button className="btn btn-danger" type="submit" data-bs-dismiss={"modal"}>
						Delete
					</button>
				</form>
			</Modal> */}
		</li>
	);
};
