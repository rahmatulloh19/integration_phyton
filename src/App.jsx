import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";
import { Item } from "./components/Item/Item";
import { Modal } from "./components/Modal/Modal";

function App() {
	const [todos, setTodos] = useState([]);
	const [modalInfo, setModalInfo] = useState({
		id: undefined,
		name: "",
		description: "",
		is_done: false,
	});
	const [requested, setRequested] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post("http://localhost:8000/todo/", {
				[evt.target[0].name]: evt.target[0].value,
				[evt.target[1].name]: evt.target[1].value,
			})
			.then((res) => {
				setRequested((prev) => !prev);
			});
	};

	const handleDelete = (evt) => {
		evt.preventDefault();

		axios.delete(`http://localhost:8000/todo/${modalInfo.id}`).then((res) => {
			setRequested((prev) => !prev);
		});
	};

	const handleEdit = (evt) => {
		evt.preventDefault();

		axios
			.put(`http://localhost:8000/todo/${modalInfo.id}/`, {
				[evt.target[0].name]: evt.target[0].value,
				[evt.target[1].name]: evt.target[1].value,
				[evt.target[2].name]: evt.target[2].checked,
			})
			.then((res) => setRequested((prev) => !prev));
	};

	useEffect(() => {
		setTimeout(() => {
			axios("http://localhost:8000/todo/").then((res) => setTodos(res.data));
			return () => axios("http://localhost:8000/todo/").then((res) => setTodos(res.data));
		}, 1000);
	}, [requested, modalInfo.is_done]);

	return (
		<>
			<div className="container">
				<h1 className="text-center mt-5 fw-bold">
					Welcome to Our Site. <br /> Add your Todos
				</h1>

				<form className="w-75 mx-auto mt-5 d-flex flex-column gap-3" onSubmit={handleSubmit}>
					<input
						className="form-control"
						name="name"
						type="text"
						required
						placeholder="Add todo"
						maxLength={45}
					/>
					<textarea
						className="form-control"
						name="description"
						placeholder="Add description todo ..."
						maxLength={70}
						required></textarea>
					<button className="btn btn-success w-25 align-self-end" type="submit">
						Add
					</button>
				</form>

				<ul className="list-unstyled my-5 list-group">
					{!!todos.length ? (
						todos.map((item) => {
							return (
								<Item
									title={item.description.split(" ").slice(0, 4).join(" ")}
									description={item.description}
									is_done={item.is_done}
									id={item.id}
									name={item.name}
									key={item.id}
									setModalInfo={setModalInfo}
								/>
							);
						})
					) : (
						<h3 className="text-center">No todo</h3>
					)}
				</ul>
			</div>
			<Modal id="deleteModal">
				<form className="d-flex align-items-end flex-wrap gap-3 p-3" onSubmit={handleDelete}>
					<h4>Do you really want to delete this todo "{modalInfo.name}"</h4>
					<button className="btn btn-secondary ms-auto" type="button" data-bs-dismiss="modal">
						Cancel
					</button>
					<button className="btn btn-danger" type="submit" data-bs-dismiss={"modal"}>
						Delete
					</button>
				</form>
			</Modal>
			{
				<Modal id="editModal">
					<form className="d-flex align-items-end flex-wrap gap-3 p-3" onSubmit={handleEdit}>
						<input
							className="form-control"
							name="name"
							type="text"
							required
							placeholder="Edit todo"
							maxLength={45}
							defaultValue={modalInfo.name}
						/>
						<textarea
							className="form-control"
							name="description"
							placeholder="Edit description todo ..."
							maxLength={70}
							defaultValue={modalInfo.description}
							required></textarea>
						<div className="d-flex w-100 gap-3">
							<label className="d-flex align-items-center flex-grow-1 gap-3">
								Is done ?
								<input
									style={{ width: "18px", height: "18px" }}
									type="checkbox"
									name="is_done"
									checked={modalInfo.is_done}
									onChange={(evt) => {
										setModalInfo((prev) => ({ ...prev, is_done: evt.target.checked }));
									}}
								/>
							</label>
							<button
								className="btn btn-secondary align-self-end"
								type="button"
								data-bs-dismiss="modal">
								Cancel
							</button>
							<button className="btn btn-warning" type="submit" data-bs-dismiss={"modal"}>
								Edit
							</button>
						</div>
					</form>
				</Modal>
			}
		</>
	);
}

export default App;
