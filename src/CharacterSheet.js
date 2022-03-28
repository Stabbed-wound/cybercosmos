/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Armour from "./Armour";
import Stat from "./Stat";
import Skill from "./Skill";
import Weapon from "./Weapon";

export default function CharacterSheet() {
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
