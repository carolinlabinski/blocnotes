import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/Display";
import "./App.css";

const App = () => {
	const [note, setNote] = useState("empty");
	return (
		<div>
			<h1 style={{ marginLeft: "10px" }}>
				Better bloc notes (try using markup language)
			</h1>
			<MarkdownInput triggerSetNote={(input) => setNote(input)} note={note} />
			<NoteDisplay note={note.note} title={note.notetitle} />
		</div>
	);
};

export default App;
