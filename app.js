const GameBoard = (() => {
	"use strict";
	// const gameBoard = ["✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️"];
	const gameBoard = ["", "", "", "", "", "", "", "", ""];

	const connectToDOM = (array) => {
		array.forEach((element, i) => {
			document.getElementById(`x${i}`).innerText = element;
			// element.addEventListener("click", () => {
			// 	element.innerText = "X";
			// });
		});
	};

	connectToDOM(gameBoard);

	return gameBoard;
})();

const Player = (marker) => {
	"use strict";
	const myMarker = marker;
	const board = GameBoard;
	const placeMarker = (marker, board) => {
		board.forEach((element, i) => {
			element = document.getElementById(`x${i}`);
			element.addEventListener("click", () => {
				if (element.innerText === "") {
					element.innerText = marker;
				}
			});
		});
	};
	placeMarker(myMarker, board);
	return { myMarker };
};

const player_one = Player("✖️");
const player_two = Player("⭕");
