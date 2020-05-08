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
