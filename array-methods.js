var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach((planet) => {
    let headEl = document.createElement("h3");
    let textNode = document.createTextNode( planet.charAt(0).toUpperCase() + planet.slice(1));
    headEl.appendChild(textNode);
    el.appendChild(headEl);
});

// Use the map method to create a new array where the first letter of each planet is capitalized

let newPlanetArray = planets.map((planet) => {
    planet = planet.charAt(0).toUpperCase() + planet.slice(1);
    return planet;
}); 
console.log(newPlanetArray);



// Use the filter method to create a new array that contains planets with the letter 'e'

let planetFilter = planets.filter((planet) => {
    if (planet.includes("e"))
    return planet;
});
console.log(planetFilter);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let newSentence = words.reduce((a, b) => {
    return `${a} ${b}`;
});
console.log(newSentence);