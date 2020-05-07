import React, { useState, useEffect } from "react";

const MarkdownInput = ({ triggerSetNote, note }) => {
	const [input, setInput] = useState({});

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleClick = (e) => {
		e.preventDefault();
		triggerSetNote(input);
		localStorage.setItem(input.note, JSON.stringify(input));
		getAllItems();
	};

	const getAllItems = () => {
		for (let i = 0; i <= localStorage.length; i++) {
			console.log("Show keys " + localStorage.key(i));
			let notekeys = localStorage.getItem(localStorage.key(i));
			console.log("Keys " + notekeys);
		}
	};

	return (
		<div>
			<p style={{ marginLeft: "10px" }}> </p>
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
