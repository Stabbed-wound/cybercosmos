import Stats from "./Stats";
import { FC } from "react";
import Health from "./Quick";
import { SheetProps } from "../types";

const CharacterSheet: FC<SheetProps> = () => {
	return (
		<div className="my-10 text-center mx-72 h-screen">
			<Health health={[35, 40]} humanity={[38, 50]} luck={[7, 7]} />
			<Stats values={[7, 7, 7, 4, 7, 6, 5, 6, 4, 5]} />
		</div>
	);
};

export default CharacterSheet;
