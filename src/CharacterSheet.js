import React from "react";
import "./style.css";

export default function CharacterSheet() {
	return (
		<div class="my-10 text-center mx-48 h-screen">
			<div class="float-left h-full">
				<Stat name={"INT"} value={7} />
				<Stat name={"REF"} value={7} />
				<Stat name={"DEX"} value={7} />
				<Stat name={"TECH"} value={4} />
				<Stat name={"COOL"} value={7} />
				<Stat name={"WILL"} value={6} />
				<Stat name={"LUCK"} value={6} />
				<Stat name={"MOVE"} value={5} />
				<Stat name={"BODY"} value={6} />
				<Stat name={"EMP"} value={6} />
			</div>
			<div class="float-left"></div>
		</div>
	);
}

function Stat({ name, value, outOf }) {
	return (
		<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative">
			<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-none text-lg absolute top-0 right-0">
				{name}
			</div>
			{outOf ? (
				<div></div>
			) : (
				<div class="text-4xl mt-1 h-max w-max absolute bottom-0">
					{value}
				</div>
			)}
		</div>
	);
}
