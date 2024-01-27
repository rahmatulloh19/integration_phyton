import React from "react";

export const Accordion = ({ title, children, id }) => {
	return (
		<div className="accordion" id={`accordion${id}`}>
			<div className="accordion-item">
				<h2 className="accordion-header" id={`heading${id}`}>
					<button
						className="accordion-button"
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
					<div className="accordion-body">{children}</div>
				</div>
			</div>
		</div>
	);
};
