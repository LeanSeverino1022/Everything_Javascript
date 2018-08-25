const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]

// NOW LET'S USE ARROW FUNCTIONS
const totalDamageOnDorkman = dragonEvents
    .filter( e => e.type === 'attack') //function(e) { e.type === 'attack' }
    .filter (e => e.target === 'player-dorkman')
    .map( e => e.value)
    .reduce( (prev, value) => {
        console.log(prev + ' + ' + value); //0-12. 12-12
        return prev + value ;
    }, 0)

console.log('totalDamageOnDorkman: ', totalDamageOnDorkman); // 24

// EXTRA: how to use filter

const arr = [22,15,32,5, 60, 44];

var getEven = function( item ) {
    return item % 2 == 0;
};

//console.log all even numbers in the array
console.log( arr.filter(getEven) ); // 22, 32, 60, 44