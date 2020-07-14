console.log(`Howdee Doody`)
let scoreCard = []


function play(boxId) {
    let whoseTurn = document.getElementById(`player`)
    let chosenOne = document.getElementById(boxId)
    chosenOne.innerText = whoseTurn.innerText
    scoreCard[boxId] = chosenOne.innerText
    console.log(scoreCard)
    console.log(scoreCard.length)

    if (whoseTurn.innerText === `X`) {
        whoseTurn.innerText = `O`
    } else {
        whoseTurn.innerText = `X`
    }

    if ((scoreCard[0] === `X` && scoreCard[1] === `X` && scoreCard[2] === `X`) 
            || (scoreCard[3] === `X` && scoreCard[4] === `X` && scoreCard[5] === `X`)
            || (scoreCard[6] === `X` && scoreCard[7] === `X` && scoreCard[8] === `X`)
            || (scoreCard[0] === `X` && scoreCard[3] === `X` && scoreCard[6] === `X`)
            || (scoreCard[1] === `X` && scoreCard[4] === `X` && scoreCard[7] === `X`)
            || (scoreCard[2] === `X` && scoreCard[5] === `X` && scoreCard[8] === `X`)
            || (scoreCard[0] === `X` && scoreCard[4] === `X` && scoreCard[8] === `X`)
            || (scoreCard[2] === `X` && scoreCard[4] === `X` && scoreCard[6] === `X`)) {
                alert(`Player X Wins!!`)
        } else if ((scoreCard[0] === `O` && scoreCard[1] === `O` && scoreCard[2] === `O`) 
            || (scoreCard[3] === `O` && scoreCard[4] === `O` && scoreCard[5] === `O`)
            || (scoreCard[6] === `O` && scoreCard[7] === `O` && scoreCard[8] === `O`)
            || (scoreCard[0] === `O` && scoreCard[3] === `O` && scoreCard[6] === `O`)
            || (scoreCard[1] === `O` && scoreCard[4] === `O` && scoreCard[7] === `O`)
            || (scoreCard[2] === `O` && scoreCard[5] === `O` && scoreCard[8] === `O`)
            || (scoreCard[0] === `O` && scoreCard[4] === `O` && scoreCard[8] === `O`)
            || (scoreCard[2] === `O` && scoreCard[4] === `O` && scoreCard[6] === `O`)) {
                alert(`Player O Wins!!`)
    } 

    let boardFull = true;
    for (i = 0; i <= 8; i++){
        console.log(scoreCard[i])
        if (scoreCard[i] === undefined){
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert(`Cat's Game; No Winner`);
    }
    
}




