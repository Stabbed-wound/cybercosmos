import React from "react";
import "./style.css";

export default function CharacterSheet() {
	return (
		<div class="my-10 text-center mx-80 h-screen">
			<div class="h-32 w-1/3"></div>
			<Stats values={[]} />
		</div>
	);
}

function Stat({ name, value }) {
	return (
		<div class="flex flex-auto justify-center">
			<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative">
				<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute top-0 right-0">
					{name}
				</div>
				<div class="text-5xl w-full h-min absolute bottom-0 text-center">
					{value}
				</div>
			</div>
		</div>
	);
}

function Resource({ name, current, total }) {
	return (
		<div class="flex flex-auto justify-center">
			<div class="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative">
				<div class="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute top-0 right-0">
					{name}
				</div>
				<div class="text-5xl absolute bottom-0 w-full flex justify-center">
					<div>{current}</div>
					<div class="bg-cyberred w-1 h-6"></div>
					<div>{total}</div>
				</div>
			</div>
		</div>
	);
}

function Stats({ values }) {
	return (
		<div class="flex flex-wrap">
			<Stat name={"INT"} value={values[0]} />
			<Stat name={"REF"} value={values[1]} />
			<Stat name={"DEX"} value={values[2]} />
			<Stat name={"TECH"} value={values[3]} />
			<Stat name={"COOL"} value={values[4]} />
			<Stat name={"WILL"} value={values[5]} />
			<Resource name={"LUCK"} />
			<Stat name={"MOVE"} value={values[6]} />
			<Stat name={"BODY"} value={values[7]} />
			<Resource name={"EMP"} current={values[8]} total={values[9]} />
		</div>
	);
}
