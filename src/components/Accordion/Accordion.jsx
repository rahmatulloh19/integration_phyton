import React from "react";

export const Accordion = ({ title, children, id, is_done }) => {
	return (
		<div className="accordion" id={`accordion${id}`}>
			<div className="accordion-item border-0">
				<h2 className="accordion-header" id={`heading${id}`}>
					<button
						className={`fs-4 accordion-button p-0 bg-transparent border-0 w-100 ${
							is_done ? "text-decoration-line-through" : ""
						}`}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={`#collapse${id}`}
						aria-expanded="true"
						aria-controls={`collapse${id}`}>
						{title}
					</button>
				</h2>
				<div
					id={`collapse${id}`}
					className="accordion-collapse collapse"
					aria-labelledby={`heading${id}`}
					data-bs-parent={`#accordion${id}`}>
					<div className="accordion-body p-0 bg-transparent ">{children}</div>
				</div>
			</div>
		</div>
	);
};
