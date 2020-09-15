let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNo = Math.floor(Math.random() * (max - min + 1) + min);

// ui variables
const UiGame = document.querySelector(".game");
const uiMin = document.querySelector("#min-num");
const uiMax = document.querySelector("#max-num");
const uiInput = document.querySelector("#input");
const uiBtn = document.querySelector(".btn");
const uiMessage = document.querySelector(".message");
// assign min and max
uiMin.textContent = min;
uiMax.textContent = max;
// listen for guess
uiBtn.addEventListener("click", guess);
//Play again
UiGame.addEventListener("mousedown", playAgain);

function playAgain(e) {
    if (e.target.className === "play-again") {

    }
}

function reload() {
    window.location.reload()
}

function guess() {
    let noGuessed = parseInt(uiInput.value);
    if (isNaN(noGuessed) || noGuessed > max || noGuessed < min) {
        uiMessage.textContent = `Number must be between ${min} and ${max}`;
        uiMessage.style.color = "red";
        uiInput.style.borderColor = "red";
    } else if (noGuessed === winningNo) {
        uiInput.disabled = true;
        uiMessage.textContent = `Congrats you won!! ${winningNo} is the number`;
        uiMessage.style.color = " green";
        uiInput.style.borderColor = "green";
        setTimeout(reload, 4000)

    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            uiInput.disabled = true;
            uiMessage.textContent = `Sorry you lost  ${winningNo} is the number`;
            uiMessage.style.color = " red";
            uiInput.style.borderColor = "red";
            setTimeout(reload, 2000)
                // uiBtn.value = "Play again";
                // uiBtn.className += "play-again";
        } else {
            uiMessage.textContent = `${noGuessed} is not correct you have ${guessesLeft} guesses left`;
            uiInput.value = "";
            uiMessage.style.color = " red";
            uiInput.style.borderColor = "red";
        }
    }
}