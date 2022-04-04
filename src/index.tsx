import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Header from "./Header";
import CharacterSheet from "./Character Sheet/CharacterSheet";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Header />
		<CharacterSheet />
	</React.StrictMode>
);
