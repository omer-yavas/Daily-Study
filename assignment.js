//Assignment1

/*let country = "Turkey";
let continent = "Asia";
let population = 89;
console.log(country);
console.log(continent);
console.log(population);
*/
//Lecture:DAta Types

/*let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//lecture: let, const and var
language = "Turkish";
isIsland = true;
halfpop = population / 2;
console.log(halfpop);
population++;
console.log(population);
const finlandpop = 6;

console.log(population > finlandpop);
const description =
  country +
  " is in " +
  continent +
  " and it's " +
  population +
  " million people speak " +
  language;
console.log(description);
console.log(6 + 3 - "4" - 2);
*/

/*Relation between == and ===, Number function

const numNeighbours = Number(
  prompt("How many neighbour countriies does your counytry have")
);
if (numNeighbours === 1) console.log("only one");
else if (numNeighbours > 1) console.log("more than one");
else console.log("No borders");

*/

/*
let country = "Turkey";
let population = 44;
let isIsland = false;
let language = "english";

if (population < 50 && !isIsland && language == "english") {
  console.log("you should live in", country);
} else {
  console.log(`${country} doesn't meet your criteria`);
}
*/

//Switch exercise
/*
let language = prompt("write the language");

switch (language) {
  case "chinese":
    console.log("Most number of native speakers");
    break;
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("second language");
    break;
  case "english":
    console.log("3rd place");
    break;
  default:
    console.log("great language too");
}*/

//Ternary Operator Assignment

let country = prompt("country");
let population = prompt("population");

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
