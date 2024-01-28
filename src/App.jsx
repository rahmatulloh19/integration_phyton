import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";
import { Item } from "./components/Item/Item";

function App() {
	const [todos, setTodos] = useState([]);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post("http://localhost:8000/todo/", {
				[evt.target[0].name]: evt.target[0].value,
				[evt.target[1].name]: evt.target[1].value,
			})
			.then((res) => {
				console.log(res);
			});
		axios("http://localhost:8000/todo/").then((res) => setTodos(res.data));
	};

	useEffect(() => {
		// axios
		// 	.delete("http://localhost:8000/todo/?format=json/1", {
		// 		name: "Hello world",
		// 		description: "disney world",
		// 	})
		// 	.then((res) => console.log(res));

		// axios
		// 	.put("http://localhost:8000/todo/5/", {
		// 		name: "Hello world1",
		// 		description: "disney world1",
		// 	})
		// 	.then((res) => console.log(res));
		axios("http://localhost:8000/todo/").then((res) => setTodos(res.data));
	}, [todos.length]);

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
					{todos.length &&
						todos.map((item) => {
							return (
								<Item
									title={item.description.split(" ").slice(0, 4).join(" ")}
									description={item.description}
									is_done={item.is_done}
									id={item.id}
									name={item.name}
									key={item.id}
								/>
							);
						})}
				</ul>
			</div>
		</>
	);
}

export default App;
