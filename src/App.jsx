import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useLayoutEffect } from "react";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
	useLayoutEffect(() => {
		// axios
		// 	.delete("http://localhost:8000/todo/?format=json/1", {
		// 		name: "Hello world",
		// 		description: "disney world",
		// 	})
		// 	.then((res) => console.log(res));
		// axios.delete("http://localhost:8000/todo/2").then((res) => console.log(res));
		// axios
		// 	.put("http://localhost:8000/todo/5/", {
		// 		name: "Hello world1",
		// 		description: "disney world1",
		// 	})
		// 	.then((res) => console.log(res));
		axios("http://localhost:8000/todo/").then((res) => console.log(res));
	}, []);

	return (
		<>
			<div className="container">
				<form className="w-75 mx-auto mt-5 d-flex gap-3">
					<input className="form-control" type="text" required placeholder="Add todo" />
					<button className="btn btn-success" type="submit">
						Add
					</button>
				</form>

				<ul className="list-unstyled my-5">
					<li className="d-flex justify-content-between align-items-center">
						<div className="wrapper d-flex align-items-center">
							<input className="form-check-input me-3" type="checkbox" id="flexCheckDefault" />
							<label className="form-check-label" for="flexCheckDefault">
								<p className="fs-3 mb-0">Title</p>
							</label>
						</div>

						<div className="wrapper">
							<button className="btn btn-danger me-3" type="button">
								Delete
							</button>
							<button className="btn btn-warning" type="button">
								Edit
							</button>
						</div>
						<Accordion title={"hiiiiii"} id="2">
							Hello worldcha
						</Accordion>
					</li>
					<li className="d-flex justify-content-between align-items-center">
						<div className="wrapper d-flex align-items-center">
							<input className="form-check-input me-3" type="checkbox" id="flexCheckDefault" />
							<label className="form-check-label" for="flexCheckDefault">
								<p className="fs-3 mb-0">Title</p>
							</label>
						</div>

						<div className="wrapper">
							<button className="btn btn-danger me-3" type="button">
								Delete
							</button>
							<button className="btn btn-warning" type="button">
								Edit
							</button>
						</div>
						<Accordion title={"Hello world"} id="1">
							hello world
						</Accordion>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
