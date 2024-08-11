
let guessSendEl = document.getElementById('sendGuess');
let guessEl = document.getElementById('numberGuess');
resultDiv = document.querySelector('.result');

const array = getPcArray(1, 9, 4);
console.log('pc ' + array);

let guesses = 0;

guessSendEl.addEventListener('click', function () {

    guesses++;
    if (guesses <= 10) {
        let guess = guessEl.value;
        let guessArray = guess.split('');
        let guessArrayInt = [];

        if (guessArray.length == 4) {

            for (i = 0; i < 4; i++) {
                guessArrayInt.push(parseInt(guessArray[i]))
            }

            let resultString = getResultString(array, guessArrayInt);
            createResultMessagge(resultString, guess);

        } else {
            alert('insert 4 numbers between 1 and 9 (no blanks)')
        }
    } else alert(`You tried guessing the number 10 times, I'm sorry, you lost, refresh the page to play again.`)

})


function getPcArray(min, max, length) {
    let array = [];
    while (array.length < length) {
        let num = Math.floor(Math.random() * max) + min;
        if (!array.includes(num)) {
            array.push(num);
        }
    }
    return array
}

function getResultString(pc, userGuess) {
    let resultString = '';
    for (i = 0; i < 4; i++) {
        if (pc.includes(userGuess[i])) {
            if (pc[i] === userGuess[i]) {
                resultString += 'X';
            } else {
                resultString += 'O';
            }
        }
        // if (pc.indexOf(user[i]) != (-1)) {
        //     if (pc[i] === user[i]) {
        //         resultString += 'X';
        //     } else {
        //         resultString += 'O'
        //     }
        // }
    }
    return resultString
}

function createResultMessagge(resultString, numberGuess) {
    // creat result box
    const resultBox = document.createElement('div');
    resultBox.classList.add('resultBox', 'p-2', 'text-center', 'w-50', 'd-flex');

    // add user guess
    const guess = resultBox.appendChild(document.createElement('div'));
    guess.classList.add('guess', 'p-2', 'm-2');
    guess.innerHTML = numberGuess;

    // add message relative to user guess
    const message = resultBox.appendChild(document.createElement('div'));
    message.classList.add('message', 'flex-grow-1', 'p-2', 'm-2');
    if (resultString == '') {
        message.innerHTML = 'NO MATCHES'
        resultBox.classList.add('border', 'border-danger')
    } else if (resultString == 'XXXX') {
        message.innerHTML = 'YOU WIN';
        resultBox.classList.add('fw-bold', 'border', 'border-success')
    } else {
        message.innerHTML = resultString;
        resultBox.classList.add('border', 'border-info')
    }
    resultDiv.append(resultBox);
}
