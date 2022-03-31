import React from "react";
import "./style.css";

export default function CharacterSheet() {
	return (
		<div class="my-10 text-center mx-48 h-screen">
			<div class="h-32 w-1/3"></div>
			<Stats values={[7,7,7,4,7,6,5,6]}/>
		</div>
	);
}



function Stats({values}) {
	function Stat({ name, value }) {
		return (
			<div class="flex flex-auto justify-center">
				<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative">
					<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute top-0 right-0">
						{name}
					</div>
					<div class="text-5xl absolute bottom-0 right-1/2">
						{value}
						</div>
				</div>
			</div>
		);
	}
	
	return (
		<div class="flex flex-wrap">
			<Stat name={"INT"} value={values[0]} />
			<Stat name={"REF"} value={values[1]} />
			<Stat name={"DEX"} value={values[2]} />
			<Stat name={"TECH"} value={values[3]} />
			<Stat name={"COOL"} value={values[4]} />
			<Stat name={"WILL"} value={values[5]} />
			<Stat name={"MOVE"} value={values[6]} />
			<Stat name={"BODY"} value={values[7]} />
		</div>
	)
}