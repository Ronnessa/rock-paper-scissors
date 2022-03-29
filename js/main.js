const rockPlayerOption = document.getElementById('rock');
const paperPlayerOption = document.getElementById('paper');
const scissorsPlayerOption = document.getElementById('scissors');
const playerChoiceBackground = document.getElementById('player-choice');
const roundResultText = document.getElementById('round-result');
const computerScoreText = document.getElementById('computer-score');
const playerScoreText = document.getElementById('player-score');
const shadow = document.getElementById('shadow');
const gameResultModal = document.getElementById('game-result');
const playAgainBtn = document.getElementById('play-again-btn');
const closeModalBtn = document.getElementById('close-modal');

let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;

const computerChoiceImg = document.createElement('img');
const playerChoiceImg = document.createElement('img');


const computerRandomChoice = () => {
	const computerChoiceBackground = document.getElementById('computer-choice');
	let randomNumber = Math.random();
	if (randomNumber <= 0.333) {
		computerChoiceImg.setAttribute('src', './img/rock.svg');
		computerChoice = 'rock';
	} else if (randomNumber <= 0.666) {
		computerChoiceImg.setAttribute('src', './img/paper.svg');
		computerChoice = 'paper';
	} else {
		computerChoiceImg.setAttribute('src', './img/scissors.svg');
		computerChoice = 'scissors';
	}
	computerChoiceBackground.appendChild(computerChoiceImg);
	computerChoiceImg.classList.add('animation')
};

const playerRockChoice = () => {
	playerChoiceImg.setAttribute('src', './img/rock.svg');
	playerChoice = 'rock';
};

const playerPaperChoice = () => {
	playerChoiceImg.setAttribute('src', './img/paper.svg');
	playerChoice = 'paper';
};
const playerScissorsChoice = () => {
	playerChoiceImg.setAttribute('src', './img/scissors.svg');
	playerChoice = 'scissors';
};

const roundResult = () => {
	if (playerChoice === computerChoice) {
		roundResultText.textContent = 'Remis!';
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
		) {
			roundResultText.textContent = 'Otrzymujesz punkt!';
			playerScore++;
			playerScoreText.textContent = playerScore;
		} else {
			roundResultText.textContent = 'Przeciwnik otrzymuje punkt!';
			computerScore++;
			computerScoreText.textContent = computerScore;
		}
	};
	const checkPoints = () => {
		if (playerScore >= 10 || computerScore >= 10) {
		const gameResultText = document.getElementById('game-result-text');
		shadow.classList.add('visible');
		gameResultModal.classList.add('visible');
		if (playerScore >= 10) {
			gameResultText.textContent = 'Wygrana!';
		} else {
			gameResultText.textContent = 'Przegrana!';
		}
	}
};

const removeAnimation = () => {
	computerChoiceImg.classList.remove('animation');
	playerChoiceImg.classList.remove('animation');
};

const startRound = () => {
	roundResultText.textContent = '';
	playerChoiceBackground.appendChild(playerChoiceImg);
	playerChoiceImg.classList.add('animation')
	computerRandomChoice();
	setTimeout(removeAnimation, 400)
	setTimeout(roundResult, 400);
	setTimeout(checkPoints, 400);
};

const restartGame = () => {
	shadow.classList.remove('visible');
	gameResultModal.classList.remove('visible');
	computerScore = 0;
	playerScore = 0;
	computerScoreText.textContent = computerScore;
	playerScoreText.textContent = playerScore;
	playerChoiceImg.remove();
	computerChoiceImg.remove();
	roundResultText.textContent = '';
};

const closeModal = () => {
	const modal = document.getElementById('rules-modal');
	shadow.classList.remove('visible');
	modal.classList.remove('visible');
};

rockPlayerOption.addEventListener('click', () => {
	playerRockChoice();
	startRound();
});
paperPlayerOption.addEventListener('click', () => {
	playerPaperChoice();
	startRound();
});
scissorsPlayerOption.addEventListener('click', () => {
	playerScissorsChoice();
	startRound();
});

playAgainBtn.addEventListener('click', restartGame);
closeModalBtn.addEventListener('click', closeModal);
