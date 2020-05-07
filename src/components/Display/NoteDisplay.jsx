import React from "react";
import Showdown from "showdown";

const NoteDisplay = ({ note, title }) => {
	const converter = new Showdown.Converter();
	var htmlTitle = converter.makeHtml(title);
	var htmlNote = converter.makeHtml(note);
	function createMarkupNote() {
		return {
			__html: htmlNote,
		};
	}

	function createMarkupTitle() {
		return {
			__html: htmlTitle,
		};
	}

	// function getAllItems(i) {
	// 	for (i = 0; i <= localStorage.length - 1; i++) {
	// 		let key = sessionStorage.key(i);
	// 		let val = sessionStorage.getItem(key);
	// 		console.log(key);
	// 		console.log(localStorage.length);
	// 	}
	// }

	return (
		<div>
			<p style={{ marginLeft: "10px" }}> Your better notes</p>
			<div
				style={{ marginLeft: "10px" }}
				dangerouslySetInnerHTML={createMarkupTitle()}
			/>
			<div
				style={{ marginLeft: "10px" }}
				dangerouslySetInnerHTML={createMarkupNote()}
			/>
			<p style={{ marginLeft: "10px" }}> All notes:</p>
		</div>
	);
};

export default NoteDisplay;
