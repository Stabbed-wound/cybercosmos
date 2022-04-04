import { FC } from "react";
import { QuickProps } from "../types";
import Resource from "./Resource";

const Health: FC<QuickProps> = ({ health, humanity, luck }) => {
	return (
		<div className="flex">
			<Resource
				name="Hit Points"
				current={health[0]}
				total={health[1]}
				massEdit={true}
			/>
			<Resource
				name="Humanity"
				current={humanity[0]}
				total={humanity[1]}
			/>
			<Resource name="Luck" current={luck[0]} total={luck[1]} />
		</div>
	);
};

export default Health;
