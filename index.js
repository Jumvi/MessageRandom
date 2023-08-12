let yourMessage = "hello word";

console.log(yourMessage);


function randomMessage(Array){

  
  return Array[Math.floor(Math.random()*Array.length)];
}
let myArray = ["moi","je","suis"]
console.log(randomMessage(myArray));