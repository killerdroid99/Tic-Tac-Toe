const GameBoard = (() => {
	"use strict";
	// const gameBoard = ["✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️"];
	const gameBoard = ["", "", "", "", "", "", "", "", ""];

	const connectToDOM = (array) => {
		array.forEach((element, i) => {
			document.getElementById(`x${i}`).innerText = element;
		});
	};

	connectToDOM(gameBoard);

	return gameBoard;
})();

const Player = (marker) => {
	"use strict";
	const myMarker = marker;
	return { myMarker };
};

const GameFlow = (() => {
	"use strict";
	const playerOne = Player("");
	const playerTwo = Player("");
	const board = GameBoard;

	const handleChoice = () => {
		const xMarker = document.getElementById("x");
		const oMarker = document.getElementById("o");
		xMarker.addEventListener("click", () => {
			playerOne.myMarker = xMarker.value;
			playerTwo.myMarker = oMarker.value;
			document.getElementById("overlay").style.display = "none";
			document.querySelector(
				".p1text"
			).innerText = `Player 1 plays ${playerOne.myMarker}`;
		});
		oMarker.addEventListener("click", () => {
			playerOne.myMarker = oMarker.value;
			playerTwo.myMarker = xMarker.value;
			document.getElementById("overlay").style.display = "none";
			document.querySelector(
				".p1text"
			).innerText = `Player 1 plays ${playerOne.myMarker}`;
		});
	};

	const placeMarker = (board) => {
		let turn = true;
		board.forEach((element, i) => {
			element = document.getElementById(`x${i}`);
			element.addEventListener("click", () => {
				if (element.innerText === "") {
					if (turn) {
						element.innerText = playerOne.myMarker;
						document.querySelector(".p1text").innerText = "";
						document.querySelector(
							".p2text"
						).innerText = `Player 2 plays ${playerTwo.myMarker}`;
						board[i] = playerOne.myMarker;
						rules();
						turn = false;
					} else {
						element.innerText = playerTwo.myMarker;
						document.querySelector(
							".p1text"
						).innerText = `Player 1 plays ${playerOne.myMarker}`;
						document.querySelector(".p2text").innerText = "";
						board[i] = playerTwo.myMarker;
						rules();
						turn = true;
					}
				}
				console.log(board);
			});
		});
	};

	const rules = () => {
		if (
			board[0] === playerOne.myMarker ||
			(board[0] === playerTwo.myMarker && board[1] === playerOne.myMarker) ||
			(board[1] === playerTwo.myMarker && board[2] === playerOne.myMarker) ||
			board[2] === playerTwo.myMarker
		) {
			console.log("test win");
		} else if (
			board[3] === playerOne.myMarker ||
			(board[3] === playerTwo.myMarker && board[4] === playerOne.myMarker) ||
			(board[4] === playerTwo.myMarker && board[5] === playerOne.myMarker) ||
			board[5] === playerTwo.myMarker
		) {
			console.log("test win");
		} else if (
			board[6] === playerOne.myMarker ||
			(board[6] === playerTwo.myMarker && board[7] === playerOne.myMarker) ||
			(board[7] === playerTwo.myMarker && board[8] === playerOne.myMarker) ||
			board[8] === playerTwo.myMarker
		) {
			console.log("test win");
		}
	};

	handleChoice();
	placeMarker(board);
})();
