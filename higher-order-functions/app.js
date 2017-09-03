// can't do this in most other programming languages
var addToFive = function (x) {
  return x + 5;
};

// basic higher order function usage
var animals = [
  { name: 'Moo', species: 'dog' },
  { name: 'Garoo', species: 'cat' },
   { name: 'koa', species: 'sheep' },
  { name: 'Tukmol', species: 'sheep' },
]

// TURN THIS ... 

/*var sheep = [];
for(let i = 0; i < animals.length; i++) {
  if(animals[i].species === 'sheep') {
    sheep.push(animals[i]);
  }
}
*/

// INTO THIS using filter:
var sheep = animals.filter(function (animal) {
  return animal.species === 'sheep';
});


console.log(sheep); //Array(2) 0: {name: "koa", species: "sheep"}, 1: {name: "Tukmol", species: "sheep"}

//functions that you send into other functions are called callback functions





