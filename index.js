// // Code your solutions in this file
let array = ["name1", "name2"];

function writeCards(array, event = "birthday"){

    let newArray = [];

    for (let i = 0; i < array.length; i++){
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }

    return newArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number--);
    }
}



























// function writeCards(cardNames, eventName){

//     const newNames = [];

//     for(let i = 0; i < cardNames.length; i++){
//         newNames.push(`Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`);
//     }
//     return newNames;

// }

// function countDown(num = 4){

//     while(num >= 0){
//         console.log(num);
//         num--;
//     }

// }