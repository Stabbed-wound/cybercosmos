import React from "react";
import ReactDOM from "react-dom";
import CharacterSheet from "./CharacterSheet";
import Header from "./Header";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<CharacterSheet />
	</React.StrictMode>,
	document.getElementById("root")
);
