import React from "react";

export const Modal = ({ children }) => {
	console.log(children);
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex={-1}
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
};
