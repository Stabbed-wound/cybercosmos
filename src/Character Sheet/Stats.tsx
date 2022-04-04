import { StatProps, StatsProps } from "../types";
import { FC } from "react";
import Resource from "./Resource";

const Stat: FC<StatProps> = ({ name, value }) => {
	return (
		<div className="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey w-20 h-20 relative flex-none">
			<div className="h-min w-min border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg absolute top-0 right-0">
				{name}
			</div>
			<div className="text-5xl w-full h-min absolute bottom-0 text-center">
				{value}
			</div>
		</div>
	);
};

const Stats: FC<StatsProps> = ({ values }) => {
	return (
		<div className="flex flex-wrap justify-evenly">
			<Stat name={"INT"} value={values[0]} />
			<Stat name={"REF"} value={values[1]} />
			<Stat name={"DEX"} value={values[2]} />
			<Stat name={"TECH"} value={values[3]} />
			<Stat name={"COOL"} value={values[4]} />
			<Stat name={"WILL"} value={values[5]} />
			<Stat name={"MOVE"} value={values[6]} />
			<Stat name={"BODY"} value={values[7]} />
			<Resource name={"EMP"} current={values[8]} total={values[9]} />
		</div>
	);
};

export default Stats;
