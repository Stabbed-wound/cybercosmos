import React from "react";
import "./style.css";

export default function CharacterSheet() {
	return (
		<div class="my-10 text-center mx-72 h-screen">
			<div class="h-32 w-full"></div>
			<Stats values={[0, 0, 0, 0, 0, 0, 0, 0, [4, 10]]} />
		</div>
	);
}

function Stat({ name, value }) {
	return (
		<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative flex-none">
			<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute top-0 right-0">
				{name}
			</div>
			<div class="text-5xl w-full h-min absolute bottom-0 text-center">
				{value}
			</div>
		</div>
	);
}

function Resource({ name, current, total }) {
	return (
		<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey h-20 relative flex flex-col-reverse justify-items-end">
			<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute right-0 top-0">
				{name}
			</div>
			<div class="text-5xl flex flex-shrink w-min h-min align-baseline justify-center content-end">
				{current}
				<div class="bg-cyberred w-min h-min">
					<div class="text-white text-xs leading-none w-max">out of</div>
				</div>
				{total}
			</div>
		</div>
	);
}

function Stats({ values }) {
	return (
		<div class="flex flex-wrap justify-evenly">
			<Stat name={"INT"} value={values[0]} />
			<Stat name={"REF"} value={values[1]} />
			<Stat name={"DEX"} value={values[2]} />
			<Stat name={"TECH"} value={values[3]} />
			<Stat name={"COOL"} value={values[4]} />
			<Stat name={"WILL"} value={values[5]} />
			<Stat name={"MOVE"} value={values[6]} />
			<Stat name={"BODY"} value={values[7]} />
			<Resource name={"EMP"} current={values[8][0]} total={values[8][1]} />
		</div>
	);
}
