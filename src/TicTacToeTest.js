import React, { useState } from "react";
import "./style.css";

export default function App() {
	const [turn, setTurn] = useState("X");
	const [board, setBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	]);

	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	function handleTurn(pos) {
		if (turn === "X") {
			setTurn("O");
		} else {
			setTurn("X");
		}
	}

	function Box({ pos }) {
		function handleClick() {
			handleTurn(pos);
		}

		return (
			<div
				class="w-10 h-10 text-center align-middle border border-slate-400 hover:bg-slate-300"
				onClick={handleClick}
			>
				{board[pos]}
			</div>
		);
	}

	return (
		<div id="tictactoe">
			<p>{turn}'s turn</p>
			<table>
				<tr>
					<td>
						<Box pos={0} />
					</td>
					<td>
						<Box pos={1} />
					</td>
					<td>
						<Box pos={2} />
					</td>
				</tr>
				<tr>
					<td>
						<Box pos={3} />
					</td>
					<td>
						<Box pos={4} />
					</td>
					<td>
						<Box pos={5} />
					</td>
				</tr>
				<tr>
					<td>
						<Box pos={6} />
					</td>
					<td>
						<Box pos={7} />
					</td>
					<td>
						<Box pos={8} />
					</td>
				</tr>
			</table>
		</div>
	);
}
