
let guessSendEl = document.getElementById('indovina');
let guessEl = document.getElementById('numero');
resultDiv = document.querySelector('.result');

const array = getPcArray(1, 9, 4);
console.log('pc ' + array);

guessSendEl.addEventListener('click', function(){

    let guess = guessEl.value;
    let guessArray = guess.split('');
    let guessArrayInt = [];

    if (guessArray.length == 4){

        for (i = 0; i < 4; i++) {
            guessArrayInt.push(parseInt(guessArray[i]))
        }

        let resultString = getResultString(array, guessArrayInt);
        createResultMessagge(resultString);

    } else {
        alert('insert 4 numbers between 1 and 9 (no blanks)')
    }
})


function getPcArray(min, max, length){
    let array = [];
    while (array.length < length){
        let num = Math.floor(Math.random()*max) + min;
        if (!array.includes(num)){
            array.push(num);
        }
    }
    return array
}

function getResultString(pc, user){
    let resultString = '';
    for (i = 0; i < 4; i++){
        // if (pc.includes(user[i])){
        //     if (pc[i] === user[i]){
        //         arrayString += 'X';
        //     } else {
        //         arrayString += 'O';
        //     }
        // }
        if (pc.indexOf(user[1]) != (-1)) {
            if (pc[i] === user[i]) {
                resultString += 'X';
            } else {
                resultString += 'O'
            }
        } 
    }
    return resultString
}

function createResultMessagge(resultString) {
    const resultBox = document.createElement('div');
        resultBox.classList.add('resultBox', 'p-2', 'm-2', 'text-center', 'w-50');
        if (resultString == '') {
            resultBox.innerHTML = 'no matches'
            resultBox.classList.add('border', 'border-danger')
        } else if (resultString == 'XXXX') {
            resultBox.innerHTML = 'YOU WIN';
            resultBox.classList.add('fw-bold', 'border', 'border-success')
        } else {
            resultBox.innerHTML = resultString;
            resultBox.classList.add('border', 'border-info')
        }
        resultDiv.append(resultBox);
}
