

// console.log(writeCards(names, "birthday"))
// declare an empty array variable to append the statements printed into it
//  i want that every statement printed , its then added to an array

let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){
  const newArray = [];

    for(let i = 0; i < names.length; i++){

    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    

    }

    return newArray;
}

writeCards(names, "suprise")

// Takes in any positive integer, starting from that number
// Counts down to zero 0using console.log
// 




let anyInt = 11

function countDown(anyInt){
  while (anyInt > -1 ){
    console.log(anyInt --);
  }
}
