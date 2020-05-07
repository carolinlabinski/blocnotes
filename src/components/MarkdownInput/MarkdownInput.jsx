import React, { useState, useEffect } from "react";
// import noteReducer from "../reducers/noteReducer";

const MarkdownInput = ({ triggerSetNote }) => {
	const [input, setInput] = useState({});
	// const [input, dispatch] = useReducer(noteReducer, []);
	useEffect(() => {
		localStorage.setItem(input, JSON.stringify(input));
	}, [input]);

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	// console.log("Input" + input);

	const handleClick = (e) => {
		e.preventDefault();
		triggerSetNote(input);
		// e.preventDefault();
		// localStorage.setItem("mynote", JSON.stringify(input));
		console.log("Click happened");
	};

	// localStorage.setItem("mynote", JSON.stringify(input)); // creates a json string to save in local storage
	// const result = localStorage.getItem("mynote"); //returns json string of object
	// const jsonResult = JSON.parse(result); // to get back the object
	// console.log("result string" + result);
	// console.log("result" + jsonResult);

	return (
		<div>
			<form>
				<label>
					<textarea
						type="text"
						name="notetitle"
						onChange={handleInputChange}
						rows="1"
						cols="40"
						style={{ marginLeft: "10px" }}
						placeholder="Note title..."
						required
					/>
					<br></br>
					<textarea
						type="text"
						name="note"
						onChange={handleInputChange}
						rows="4"
						cols="50"
						style={{ marginLeft: "10px" }}
						placeholder="Write your bloc note..."
						required
					/>
					<br />
					<input
						className="btn btn-dark"
						type="submit"
						value="Save"
						style={{ marginLeft: "10px" }}
						onClick={handleClick}
					></input>
				</label>
			</form>
		</div>
	);
};

export default MarkdownInput;

{
	/* <button style={{ marginLeft: "10px" }} className="btn btn-dark">
Save note
</button> */
}

// setNote function
// const note = { title: "variable", text: "variable" }; //gets infos of the textarea
// localStorage.setItem("mynote", JSON.stringify(note)); // creates a json string to save in local storage
// const result = localStorage.getItem('mynote'); //returns json string of object
// JSON.parse(result); // to get back the object

// const saveNote = (input) => {
// 	localStorage.setItem("mynote", JSON.stringify(input));
// 	const result = localStorage.getItem("mynote");
// 	JSON.parse(result);
// 	console.log(result);
// };
