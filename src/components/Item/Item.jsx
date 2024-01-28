import { useState } from "react";
import { Accordion } from "../Accordion/Accordion";

export const Item = ({ id, title, description, name, is_done, setModalInfo }) => {
	// const [close, setClose] = useState(false);
	// console.log(title);

	// setModalId((prev) => prev === id && name);

	return (
		<li
			className="d-flex justify-content-between align-items-center list-group-item"
			onClick={() => setModalInfo((prev) => ({ ...prev, id: id, name: name }))}>
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
					data-bs-target="#deleteModal">
					Delete
				</button>
				<button
					className="btn btn-warning"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#editModal">
					Edit
				</button>
			</div>
		</li>
	);
};
