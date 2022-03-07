const GameBoard = (() => {
	"use strict";
	// const gameBoard = ["✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️", "⭕", "✖️"];
	let gameBoard = ["", "", "", "", "", "", "", "", ""];

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
			document.querySelector(".overlay").style.visibility = "hidden";
			document.querySelector(
				".p1text"
			).innerText = `Player 1 plays ${playerOne.myMarker}`;
		});
		oMarker.addEventListener("click", () => {
			playerOne.myMarker = oMarker.value;
			playerTwo.myMarker = xMarker.value;
			document.querySelector(".overlay").style.visibility = "hidden";
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
						rules(playerOne.myMarker);
						turn = false;
					} else {
						element.innerText = playerTwo.myMarker;
						document.querySelector(
							".p1text"
						).innerText = `Player 1 plays ${playerOne.myMarker}`;
						document.querySelector(".p2text").innerText = "";
						board[i] = playerTwo.myMarker;
						rules(playerTwo.myMarker);
						turn = true;
					}
				}
				console.log(board);
			});
		});
	};

	const rules = (playerMarker) => {
		const winEvent = document.querySelector(".winEvent");
		if (
			(board[0] === playerMarker &&
				board[1] === playerMarker &&
				board[2] === playerMarker) ||
			(board[3] === playerMarker &&
				board[4] === playerMarker &&
				board[5] === playerMarker) ||
			(board[6] === playerMarker &&
				board[7] === playerMarker &&
				board[8] === playerMarker)
		) {
			winEvent.style.visibility = "visible";
			playerMarker === playerOne.myMarker
				? (winEvent.innerText = "Player 1 wins")
				: (winEvent.innerText = "Player 2 wins");
			document.querySelector(".selection-text").innerText = "";
			playAgain();
		} else if (
			(board[0] === playerMarker &&
				board[3] === playerMarker &&
				board[6] === playerMarker) ||
			(board[1] === playerMarker &&
				board[4] === playerMarker &&
				board[7] === playerMarker) ||
			(board[2] === playerMarker &&
				board[5] === playerMarker &&
				board[8] === playerMarker)
		) {
			winEvent.style.visibility = "visible";
			playerMarker === playerOne.myMarker
				? (winEvent.innerText = "Player 1 wins")
				: (winEvent.innerText = "Player 2 wins");
			document.querySelector(".selection-text").innerText = "";
			playAgain();
		} else if (
			(board[0] === playerMarker &&
				board[4] === playerMarker &&
				board[8] === playerMarker) ||
			(board[2] === playerMarker &&
				board[4] === playerMarker &&
				board[6] === playerMarker)
		) {
			winEvent.style.visibility = "visible";
			playerMarker === playerOne.myMarker
				? (winEvent.innerText = "Player 1 wins")
				: (winEvent.innerText = "Player 2 wins");
			document.querySelector(".selection-text").innerText = "";
		} else if (!board.includes("")) {
			winEvent.style.visibility = "visible";
			winEvent.innerText = "It's a draw!";
			document.querySelector(".selection-text").innerText = "";
			playAgain();
		}
	};

	const playAgain = () => {
		const playAgain = document.createElement("button");
		playAgain.className = "playAgain";
		playAgain.innerText = "Play Again?";
		document.querySelector(".winEvent").appendChild(playAgain);
		playAgain.addEventListener("click", () => {
			document.querySelector(".winEvent").style.visibility = "hidden";
			console.log(board);
			document.querySelector(".overlay").style.visibility = "visible";
		});
	};

	handleChoice();
	placeMarker(board);
})();
