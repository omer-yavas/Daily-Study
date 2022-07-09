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
/*
let country = prompt("country");
let population = prompt("population");

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/

/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population}million people and its capital city is ${capitalCity}`;
}
const a = describeCountry("Turkey", 90, "Ankara");
const b = describeCountry("Greece", 15, "Athens");
const c = describeCountry("Russia", 140, "Moskova");
console.log(a, b, c);
*/

/*function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
*/
/*
const Turkey = percentageOfWorld1(90);
const Greece = percentageOfWorld1(13);
const Bosnia = percentageOfWorld1(4);
console.log(Turkey, Greece, Bosnia);

const percentageofWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageofWorld2(500));
*/
/*
let country = prompt("country");
let population = Number(prompt("population"));
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world`;
}
console.log(`${describePopulation(country, population)}`);
*/
/*
const populations = [20, 40, 60, 80];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
];
console.log(percentages);
*/

/*
const neighbours = [
  "greece",
  "bulgaria",
  "georgia",
  "armenia",
  "iran",
  "iraq",
  "syria",
];
console.log(neighbours);
neighbours.push("utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("germany")) {
} else {
  console.log("not a central european country");
}

neighbours[1] = "republic of Bulgaria";
console.log(neighbours);
*/
const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 90,
  neighbours: ["greece", "bulgaria", "georgia", "iran", "iraq", "syria"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} :)`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(
  `${myCountry.country} has${myCountry.population}million ${myCountry.language}speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

myCountry.describe();
