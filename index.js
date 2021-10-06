// Code your solutions in this file

function writeCards(cardNames, eventName){

    const newNames = [];

    for(let i = 0; i < cardNames.length; i++){
        newNames.push(`Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newNames;

}

function countDown(num = 4){

    while(num >= 0){
        console.log(num);
        num--;
    }

}