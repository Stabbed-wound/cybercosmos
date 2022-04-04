/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef, useState } from "react";
import { ResourceProps } from "../types";

const Resource: FC<ResourceProps> = ({
	name,
	current,
	total,
	massEdit = false,
}) => {
	const [value, setValue] = useState(current);
	const editAmount = useRef<HTMLInputElement>(null);

	function SubValue() {
		if (editAmount.current === null || editAmount.current.value === "") {
			setValue((value) => (value === 0 ? 0 : value - 1));
			return;
		}
		setValue((value) => value - parseInt(editAmount.current?.value!));
		editAmount.current.value! = "";
	}

	function AddValue() {
		if (editAmount.current === null || editAmount.current.value === "") {
			setValue((value) => (value === total ? total : value + 1));
			return;
		}
		setValue((value) => value + parseInt(editAmount.current?.value!));
		editAmount.current.value! = "";
	}

	return (
		<div className="bg-cyberblack border-cyberred rounded-lg border-[3px] text-cybergrey h-20 min-w-[80px] relative flex flex-col justify-between">
			<div className="w-full flex justify-between">
				<div>
					<a href="#" onClick={SubValue} className="float-left">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</a>
					{massEdit ? (
						<input
							type="number"
							ref={editAmount}
							min={0}
							className="border-cyberred bg-cyberblack border-l-2 border-b-2 border-r-2 w-16 float-left font-medium leading-tight text-lg"
						></input>
					) : null}
					<a href="#" onClick={AddValue} className="float-left">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</a>
				</div>
				<div className="h-min w-max border-cyberred border-l-2 border-b-2 font-medium leading-tight text-lg">
					{name}
				</div>
			</div>
			<div className="text-5xl flex w-full h-min justify-center">
				{value}
				<div className="bg-cyberred h-full w-1"></div>
				{total}
			</div>
		</div>
	);
};

export default Resource;
