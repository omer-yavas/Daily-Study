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

//Relation between == and ===, Number function

const numNeighbours = Number(
  prompt("How many neighbour countriies does your counytry have")
);
if (numNeighbours === 1) console.log("only one");
else if (numNeighbours > 1) console.log("more than one");
else console.log("No borders");
