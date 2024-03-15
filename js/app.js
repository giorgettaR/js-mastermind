
let guessSendEl = document.getElementById('indovina');
let guessEl = document.getElementById('numero')

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
        console.log('user ' + guessArrayInt)

        let arrayResult = getResultString(array, guessArrayInt);
        
        console.log('result ' + arrayResult)
    } else {
        console.log('insert 4 numbers between 1 and 9 (no blanks)')
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
    let arrayString = '';
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
                arrayString += 'X';
            } else {
                arrayString += 'O'
            }
        } 
    }
    return arrayString
}
