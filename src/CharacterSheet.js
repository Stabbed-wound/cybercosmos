/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSAdJZCYy_RCvRdC0iDOEqgaLCTBQFVoY",
  authDomain: "cybercosmos-46c91.firebaseapp.com",
  projectId: "cybercosmos-46c91",
  storageBucket: "cybercosmos-46c91.appspot.com",
  messagingSenderId: "972184976227",
  appId: "1:972184976227:web:d248034258b08eb730f156"
};

const app = initializeApp(firebaseConfig);

export default function CharacterSheet() {
	const Armour = () => {
		return (
			<div>Armour</div>
		);
	}
	const Weapon = () => {
		return (
			<div>Weapon</div>
		);
	}
	const Stat = () => {
		return (
			<div>Stat</div>
		);
	}
	const Skill = () => {
		return (
			<div>Skill</div>
		);
	}
	return (
		<>
			<div id="stats">
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
				<Stat />
			</div>
			<div id="skills">
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillTabs">
					<a href="#"></a>
				</div>
				<div id="skillBody"></div>
			</div>
			<div id="wna">
				<div id="armour">
					<Armour id="head"></Armour>
					<Armour id="body"></Armour>
					<Armour id="shield"></Armour>
				</div>
				<div id="weapons">
					<Weapon></Weapon>
				</div>
			</div>
			<div id="health"> </div>
		</>
	);
}
