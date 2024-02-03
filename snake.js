const secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;

    if (userGuess == secretNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else {
        setMessage(`Try again! ${userGuess > secretNumber ? 'Too high' : 'Too low'}.`);
    }
}

function setMessage(message) {
    document.getElementById('message').innerText = message;
}